"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Home, Star, CheckCircle } from "lucide-react"

// Mock property manager data
const propertyManagers = [
  {
    id: 1,
    name: "Rachel Thompson",
    title: "Senior Property Manager",
    branch: "Remuera",
    phone: "+64 21 111 2222",
    email: "rachel.thompson@estate.co.nz",
    specialties: ["Residential", "Multi-unit"],
    properties: 45,
    rating: 4.9,
    certified: true,
    image: "/professional-woman-property-manager.png",
  },
  {
    id: 2,
    name: "Tom Williams",
    title: "Property Manager",
    branch: "Ponsonby",
    phone: "+64 21 222 3333",
    email: "tom.williams@estate.co.nz",
    specialties: ["Apartments", "Commercial"],
    properties: 38,
    rating: 4.8,
    certified: true,
    image: "/professional-man-property-manager.jpg",
  },
  {
    id: 3,
    name: "Sophie Martinez",
    title: "Property Manager",
    branch: "Mission Bay",
    phone: "+64 21 333 4444",
    email: "sophie.martinez@estate.co.nz",
    specialties: ["Holiday Rentals", "Waterfront"],
    properties: 32,
    rating: 4.9,
    certified: true,
    image: "/professional-woman-manager.png",
  },
  {
    id: 4,
    name: "Andrew Lee",
    title: "Senior Property Manager",
    branch: "Parnell",
    phone: "+64 21 444 5555",
    email: "andrew.lee@estate.co.nz",
    specialties: ["Luxury Homes", "Portfolio Management"],
    properties: 52,
    rating: 5.0,
    certified: true,
    image: "/professional-man-senior-manager.jpg",
  },
  {
    id: 5,
    name: "Jessica Brown",
    title: "Property Manager",
    branch: "Stonefields",
    phone: "+64 21 555 6666",
    email: "jessica.brown@estate.co.nz",
    specialties: ["Townhouses", "Family Homes"],
    properties: 41,
    rating: 4.8,
    certified: true,
    image: "/professional-woman-realtor.jpg",
  },
  {
    id: 6,
    name: "Mark Johnson",
    title: "Property Manager",
    branch: "Herne Bay",
    phone: "+64 21 666 7777",
    email: "mark.johnson@estate.co.nz",
    specialties: ["Prestige Properties", "Maintenance"],
    properties: 35,
    rating: 4.7,
    certified: true,
    image: "/professional-man-consultant.png",
  },
]

export default function FindPropertyManagerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const filteredManagers = propertyManagers.filter((manager) => {
    const matchesSearch =
      manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.branch.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || manager.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  const allSpecialties = Array.from(new Set(propertyManagers.flatMap((m) => m.specialties)))

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Find Your Property Manager</h1>
            <p className="text-xl text-teal-100 mb-8 text-pretty">
              Trust our experienced property management team to take care of your investment property with
              professionalism and care.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-2xl">
            <Input
              placeholder="Search by name or branch..."
              className="h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="border-b bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm">Filter by specialty:</span>
            <Button
              variant={selectedSpecialty === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSpecialty(null)}
            >
              All
            </Button>
            {allSpecialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Property Management */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Property Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Tenant Screening</h3>
              <p className="text-sm text-muted-foreground">Comprehensive background and reference checks</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Rent Collection</h3>
              <p className="text-sm text-muted-foreground">Reliable and timely rent collection service</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Property Inspections</h3>
              <p className="text-sm text-muted-foreground">Regular inspections with detailed reports</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Quick response to maintenance issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredManagers.length} property manager{filteredManagers.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredManagers.map((manager) => (
              <Card key={manager.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={manager.image || "/placeholder.svg"}
                    alt={manager.name}
                    className="w-full h-full object-cover"
                  />
                  {manager.certified && (
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Certified
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{manager.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{manager.title}</p>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{manager.rating}</span>
                    <span className="text-sm text-muted-foreground ml-2 flex items-center gap-1">
                      <Home className="h-3 w-3" />• {manager.properties} properties
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{manager.branch} Branch</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{manager.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {manager.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={`mailto:${manager.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={`tel:${manager.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
