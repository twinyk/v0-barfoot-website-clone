"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react"

// Mock branch data
const branches = [
  {
    id: 1,
    name: "Remuera",
    address: "456 Remuera Road, Remuera, Auckland 1050",
    phone: "+64 9 555 0100",
    email: "remuera@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "Sarah Mitchell",
    agents: 12,
    parking: true,
    image: "/modern-real-estate-office-exterior.jpg",
  },
  {
    id: 2,
    name: "Ponsonby",
    address: "123 Ponsonby Road, Ponsonby, Auckland 1011",
    phone: "+64 9 555 0200",
    email: "ponsonby@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "James Chen",
    agents: 15,
    parking: true,
    image: "/contemporary-office-building.png",
  },
  {
    id: 3,
    name: "Mission Bay",
    address: "78 Tamaki Drive, Mission Bay, Auckland 1071",
    phone: "+64 9 555 0300",
    email: "missionbay@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "Emma Thompson",
    agents: 10,
    parking: false,
    image: "/beachside-office-building.jpg",
  },
  {
    id: 4,
    name: "Parnell",
    address: "234 Parnell Road, Parnell, Auckland 1052",
    phone: "+64 9 555 0400",
    email: "parnell@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "David Kumar",
    agents: 14,
    parking: true,
    image: "/elegant-office-facade.jpg",
  },
  {
    id: 5,
    name: "Stonefields",
    address: "56 Stonefields Avenue, Stonefields, Auckland 1072",
    phone: "+64 9 555 0500",
    email: "stonefields@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "Lisa Anderson",
    agents: 8,
    parking: true,
    image: "/suburban-real-estate-office.jpg",
  },
  {
    id: 6,
    name: "Herne Bay",
    address: "89 Jervois Road, Herne Bay, Auckland 1011",
    phone: "+64 9 555 0600",
    email: "hernebay@estate.co.nz",
    hours: "Mon-Fri: 8:30am-5:30pm, Sat-Sun: 9:00am-4:00pm",
    manager: "Michael Roberts",
    agents: 11,
    parking: true,
    image: "/premium-office-location.jpg",
  },
]

export default function FindBranchPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Find Your Local Branch</h1>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Visit one of our convenient locations across Auckland. Our friendly teams are ready to help with all your
              real estate needs.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-2xl">
            <Input
              placeholder="Search by suburb or address..."
              className="h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{branches.length}</div>
              <div className="text-sm text-muted-foreground">Branches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {branches.reduce((sum, b) => sum + b.agents, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Sales Consultants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7 Days</div>
              <div className="text-sm text-muted-foreground">Open Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredBranches.length} branch{filteredBranches.length !== 1 ? "es" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBranches.map((branch) => (
              <Card key={branch.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={branch.image || "/placeholder.svg"}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground">Manager: {branch.manager}</p>
                    </div>
                    <Badge variant="secondary" className="gap-1">
                      <Users className="h-3 w-3" />
                      {branch.agents} agents
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <a href={`tel:${branch.phone}`} className="hover:underline">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <a href={`mailto:${branch.email}`} className="hover:underline">
                        {branch.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  {branch.parking && (
                    <Badge variant="outline" className="mb-4">
                      Parking Available
                    </Badge>
                  )}

                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={`tel:${branch.phone}`}>Call Branch</a>
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
