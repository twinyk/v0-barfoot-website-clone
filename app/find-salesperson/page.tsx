"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Star, Award } from "lucide-react"

// Mock salesperson data
const salespeople = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Sales Consultant",
    branch: "Remuera",
    phone: "+64 21 123 4567",
    email: "sarah.mitchell@estate.co.nz",
    specialties: ["Residential Sales", "Luxury Homes"],
    sales: 142,
    rating: 4.9,
    image: "/professional-woman-realtor.jpg",
  },
  {
    id: 2,
    name: "James Chen",
    title: "Sales Consultant",
    branch: "Ponsonby",
    phone: "+64 21 234 5678",
    email: "james.chen@estate.co.nz",
    specialties: ["First Home Buyers", "Investment Properties"],
    sales: 98,
    rating: 4.8,
    image: "/professional-realtor.png",
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Branch Manager",
    branch: "Mission Bay",
    phone: "+64 21 345 6789",
    email: "emma.thompson@estate.co.nz",
    specialties: ["Waterfront Properties", "Auctions"],
    sales: 215,
    rating: 5.0,
    image: "/professional-woman-manager.png",
  },
  {
    id: 4,
    name: "David Kumar",
    title: "Sales Consultant",
    branch: "Parnell",
    phone: "+64 21 456 7890",
    email: "david.kumar@estate.co.nz",
    specialties: ["Apartments", "Development Sites"],
    sales: 87,
    rating: 4.7,
    image: "/professional-man-consultant.png",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "Senior Sales Consultant",
    branch: "Stonefields",
    phone: "+64 21 567 8901",
    email: "lisa.anderson@estate.co.nz",
    specialties: ["New Builds", "Townhouses"],
    sales: 156,
    rating: 4.9,
    image: "/professional-woman-agent.png",
  },
  {
    id: 6,
    name: "Michael Roberts",
    title: "Sales Consultant",
    branch: "Herne Bay",
    phone: "+64 21 678 9012",
    email: "michael.roberts@estate.co.nz",
    specialties: ["Luxury Properties", "Relocations"],
    sales: 124,
    rating: 4.8,
    image: "/professional-man-sales.jpg",
  },
]

export default function FindSalespersonPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const filteredSalespeople = salespeople.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.branch.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || person.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  const allSpecialties = Array.from(new Set(salespeople.flatMap((p) => p.specialties)))

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Find Your Sales Consultant</h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Connect with our award-winning team of real estate professionals who know the local market inside out.
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

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredSalespeople.length} sales consultant{filteredSalespeople.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSalespeople.map((person) => (
              <Card key={person.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  {person.rating >= 4.9 && (
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-white gap-1">
                      <Award className="h-3 w-3" />
                      Top Agent
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{person.title}</p>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{person.rating}</span>
                    <span className="text-sm text-muted-foreground ml-2">• {person.sales} sales</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{person.branch} Branch</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{person.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {person.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={`mailto:${person.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={`tel:${person.phone}`}>
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
