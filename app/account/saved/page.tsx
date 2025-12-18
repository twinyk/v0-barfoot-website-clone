"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Bed, Bath, Car, Trash2, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const savedProperties = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    address: "45 Queen Street, Auckland CBD",
    price: "$850,000",
    type: "Sale",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    image: "/modern-apartment-living.png",
    savedDate: "2024-03-15",
  },
  {
    id: 2,
    title: "Family Home with Garden",
    address: "23 Hillside Road, Remuera",
    price: "$1,250,000",
    type: "Sale",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    image: "/family-home-garden.png",
    savedDate: "2024-03-14",
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    address: "G01/1 Percy Winstone Lane, Stonefields",
    price: "$750/week",
    type: "Rental",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    image: "/luxury-penthouse.png",
    savedDate: "2024-03-12",
  },
]

export default function SavedPropertiesPage() {
  const [properties, setProperties] = useState(savedProperties)

  const handleRemove = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Saved Properties</h1>
          <p className="text-slate-600">You have {properties.length} saved properties</p>
        </div>

        {properties.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No saved properties yet</h3>
              <p className="text-slate-600 mb-6">Start browsing properties and save your favorites</p>
              <Button asChild>
                <Link href="/search">Browse Properties</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3">{property.type}</Badge>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-3 right-3"
                    onClick={() => handleRemove(property.id)}
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Link href={`/property/${property.id}`}>
                      <h3 className="font-semibold text-lg text-slate-900 hover:text-primary transition-colors mb-1">
                        {property.title}
                      </h3>
                    </Link>
                    <div className="flex items-start gap-1 text-sm text-slate-600 mb-3">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{property.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      <span>{property.parking}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="text-xl font-bold text-primary">{property.price}</div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleRemove(property.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-3">
                    Saved on {new Date(property.savedDate).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
