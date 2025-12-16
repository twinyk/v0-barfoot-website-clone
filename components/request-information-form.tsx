"use client"

import type React from "react"

import type { Property } from "@/lib/properties"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, MapPin, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface RequestInformationFormProps {
  property: Property
}

export function RequestInformationForm({ property }: RequestInformationFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    propertyReport: false,
    financingInfo: false,
    similarProperties: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center py-12">
          <CardContent>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Information Request Sent!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest. {property.agent.name} will send you the requested information shortly.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href={`/property/${property.id}`}>Back to Property</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/search">Browse More Properties</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link href={`/property/${property.id}`}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Property
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Request Property Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Information Requested</Label>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="propertyReport"
                        checked={formData.propertyReport}
                        onCheckedChange={(checked) => setFormData({ ...formData, propertyReport: checked as boolean })}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="propertyReport"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Property Report
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Detailed property inspection and building reports
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="financingInfo"
                        checked={formData.financingInfo}
                        onCheckedChange={(checked) => setFormData({ ...formData, financingInfo: checked as boolean })}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="financingInfo"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Financing Information
                        </label>
                        <p className="text-sm text-muted-foreground">Mortgage and financing options</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="similarProperties"
                        checked={formData.similarProperties}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, similarProperties: checked as boolean })
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="similarProperties"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Similar Properties
                        </label>
                        <p className="text-sm text-muted-foreground">Receive information about similar properties</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Any specific questions about the property..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Information Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                <img
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{property.title}</h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {property.address}, {property.suburb}
                  </span>
                </div>
                <p className="text-lg font-bold text-primary mt-3">{property.priceDisplay}</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Your Agent</p>
                <p className="font-semibold">{property.agent.name}</p>
                <p className="text-sm text-muted-foreground">{property.agent.phone}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
