"use client"

import type { Property } from "@/lib/properties"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Car, MapPin, Square, Mail, Phone, Calendar, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { VirtualTour3D } from "@/components/virtual-tour-3d"

interface PropertyDetailProps {
  property: Property
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"photos" | "3d">("photos")

  const handleEmailAgent = () => {
    const subject = encodeURIComponent(`Inquiry about ${property.title}`)
    const body = encodeURIComponent(
      `Hi ${property.agent.name},\n\nI am interested in the property at ${property.address}, ${property.suburb}.\n\nProperty ID: ${property.id}\nPrice: ${property.priceDisplay}\n\nI would like to learn more about this property.\n\nThank you.`,
    )
    window.location.href = `mailto:${property.agent.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-4 flex gap-2">
            <Button variant={viewMode === "photos" ? "default" : "outline"} onClick={() => setViewMode("photos")}>
              Photos
            </Button>
            <Button variant={viewMode === "3d" ? "default" : "outline"} onClick={() => setViewMode("3d")}>
              3D Virtual Tour
            </Button>
          </div>

          <div className="mb-6">
            {viewMode === "photos" ? (
              <>
                <div className="relative h-96 bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={property.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-24 bg-muted rounded-lg overflow-hidden ${
                        currentImageIndex === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <VirtualTour3D propertyTitle={property.title} propertyType={property.propertyType} />
            )}
          </div>

          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">
                    {property.address}, {property.suburb}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {property.listingType === "rent" ? "For Rent" : "For Sale"}
              </Badge>
            </div>

            <div className="flex items-center gap-6 text-lg mb-6">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-muted-foreground" />
                <span>{property.parking} Parking</span>
              </div>
            </div>

            {(property.floorArea || property.landArea) && (
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                {property.floorArea && (
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4" />
                    <span>Floor: {property.floorArea}m²</span>
                  </div>
                )}
                {property.landArea && (
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4" />
                    <span>Land: {property.landArea}m²</span>
                  </div>
                )}
              </div>
            )}

            <div className="text-4xl font-bold text-primary mb-6">{property.priceDisplay}</div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Property Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {property.listingType === "rent" && (
            <Card>
              <CardHeader>
                <CardTitle>Rental Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {property.availableFrom && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Available</p>
                        <p className="font-semibold">{property.availableFrom}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Furnished</p>
                    <p className="font-semibold">{property.furnished ? "Yes" : "No"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pets Allowed</p>
                    <p className="font-semibold">{property.petsAllowed ? "Yes" : "No"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Contact Agent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="font-semibold text-lg mb-1">{property.agent.name}</p>
                <p className="text-sm text-muted-foreground mb-4">Property Consultant</p>

                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="break-all">{property.agent.email}</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href={`/request-viewing/${property.id}`}>Request Viewing</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={`/request-information/${property.id}`}>Request Information</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={handleEmailAgent}>
                  Email Agent
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
