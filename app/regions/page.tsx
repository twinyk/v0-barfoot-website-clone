import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Building2, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const regions = [
  {
    name: "Auckland Central",
    description: "The heart of Auckland with bustling CBD, waterfront, and inner suburbs",
    branches: 15,
    salespeople: 280,
    suburbs: ["City Centre", "Parnell", "Ponsonby", "Grey Lynn", "Herne Bay", "Mission Bay"],
    image: "/auckland-cbd-harbor-skyline.jpg",
    link: "/regions/auckland-central",
  },
  {
    name: "South Auckland",
    description: "Diverse, vibrant communities with strong cultural identity and rapid growth",
    branches: 12,
    salespeople: 220,
    suburbs: ["Manukau", "Papatoetoe", "Otara", "Mangere", "Papakura", "Pukekohe"],
    image: "/south-auckland-diverse-community.jpg",
    link: "/regions/south-auckland",
  },
  {
    name: "West Auckland",
    description: "From black sand beaches to native bush and thriving suburban centers",
    branches: 10,
    salespeople: 180,
    suburbs: ["Henderson", "Te Atatu", "New Lynn", "Glen Eden", "Titirangi", "Piha"],
    image: "/west-auckland-beach-forest.jpg",
    link: "/regions/west-auckland",
  },
  {
    name: "North Shore",
    description: "Premium beaches, family-friendly suburbs, and excellent amenities",
    branches: 18,
    salespeople: 340,
    suburbs: ["Takapuna", "Devonport", "Birkenhead", "Albany", "Browns Bay", "Mairangi Bay"],
    image: "/auckland-map-suburbs.jpg",
    link: "/regions/north-shore",
  },
  {
    name: "East Auckland",
    description: "Coastal lifestyle with a mix of established and growing communities",
    branches: 8,
    salespeople: 150,
    suburbs: ["Howick", "Pakuranga", "Botany", "Bucklands Beach", "Half Moon Bay"],
    image: "/auckland-map-suburbs.jpg",
    link: "/regions/east-auckland",
  },
  {
    name: "Northland",
    description: "The winterless north with stunning coastlines and lifestyle properties",
    branches: 6,
    salespeople: 95,
    suburbs: ["Whangarei", "Kerikeri", "Paihia", "Dargaville", "Kaitaia"],
    image: "/auckland-map-suburbs.jpg",
    link: "/regions/northland",
  },
  {
    name: "Waikato",
    description: "Fertile farmland, vibrant towns, and New Zealand's fourth largest city",
    branches: 7,
    salespeople: 120,
    suburbs: ["Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Morrinsville"],
    image: "/auckland-map-suburbs.jpg",
    link: "/regions/waikato",
  },
  {
    name: "Bay of Plenty",
    description: "Sunny climate, beautiful beaches, and strong horticultural industry",
    branches: 5,
    salespeople: 85,
    suburbs: ["Tauranga", "Mount Maunganui", "Papamoa", "Te Puke", "Whakatane"],
    image: "/auckland-map-suburbs.jpg",
    link: "/regions/bay-of-plenty",
  },
]

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Regions & Suburbs</h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              We service the Upper North Island with over 80 branches and 1,800+ salespeople across Auckland, Northland,
              Waikato, and Bay of Plenty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">80+</div>
              <div className="text-sm text-muted-foreground">Branches</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">1,800+</div>
              <div className="text-sm text-muted-foreground">Salespeople</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">8</div>
              <div className="text-sm text-muted-foreground">Regions</div>
            </div>
            <div className="text-center">
              <Search className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Suburbs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Explore Our Regions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <Link key={region.name} href={region.link} className="group">
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={region.image || "/placeholder.svg"}
                      alt={region.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {region.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{region.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span>{region.branches} branches</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{region.salespeople} salespeople</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {region.suburbs.slice(0, 3).map((suburb) => (
                        <span key={suburb} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          {suburb}
                        </span>
                      ))}
                      {region.suburbs.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          +{region.suburbs.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Area?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our local experts can help you find the perfect property in the right location for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/find-salesperson">Find a Salesperson</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/find-branch">Find a Branch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
