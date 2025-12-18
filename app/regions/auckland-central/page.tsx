import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const suburbs = [
  { name: "City Centre", properties: 245, avgPrice: "$1,450,000" },
  { name: "Parnell", properties: 98, avgPrice: "$1,680,000" },
  { name: "Ponsonby", properties: 87, avgPrice: "$1,820,000" },
  { name: "Grey Lynn", properties: 76, avgPrice: "$1,550,000" },
  { name: "Herne Bay", properties: 45, avgPrice: "$2,950,000" },
  { name: "Mission Bay", properties: 63, avgPrice: "$2,150,000" },
  { name: "Newmarket", properties: 112, avgPrice: "$1,380,000" },
  { name: "Grafton", properties: 89, avgPrice: "$1,220,000" },
]

const branches = [
  { name: "City Branch", address: "567 Queen Street, Auckland CBD", phone: "(09) 1234 573" },
  { name: "Parnell Branch", address: "123 Parnell Road, Parnell", phone: "(09) 1234 574" },
  { name: "Ponsonby Branch", address: "45 Ponsonby Road, Ponsonby", phone: "(09) 1234 575" },
]

export default function AucklandCentralPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/auckland-cbd-harbor-skyline.jpg"
          alt="Auckland Central"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Auckland Central</h1>
              <p className="text-2xl mb-4">Right at the heart of it all</p>
              <p className="text-lg text-slate-200 leading-relaxed">
                Between the harbour and the hills, Auckland Central offers a city lifestyle like no other. From the
                vibrant CBD to character-filled inner suburbs, experience urban living at its finest in New Zealand's
                largest city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Home className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">815</div>
              <div className="text-sm text-muted-foreground">Properties Available</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">$1.6M</div>
              <div className="text-sm text-muted-foreground">Median Price</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">280</div>
              <div className="text-sm text-muted-foreground">Local Salespeople</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">15</div>
              <div className="text-sm text-muted-foreground">Branch Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Discover Auckland Central</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Auckland Central is the beating heart of New Zealand's largest city. The CBD offers a cosmopolitan
                lifestyle with world-class dining, entertainment, and cultural attractions. From the iconic Sky Tower to
                the revitalized waterfront precinct, the city center is constantly evolving and improving.
              </p>
              <p>
                The inner suburbs surrounding the CBD each have their own distinct character. Ponsonby and Grey Lynn are
                known for their Victorian villas, boutique shopping, and vibrant café culture. Parnell offers heritage
                charm mixed with modern sophistication, while Mission Bay and St Heliers provide beachside living just
                minutes from downtown.
              </p>
              <p>
                Living in Auckland Central means having everything at your fingertips - top restaurants, theatres,
                museums, beaches, and parks are all within easy reach. With excellent public transport connections and
                walkable neighborhoods, it's the ultimate urban lifestyle for professionals, downsizers, and anyone who
                wants to be in the thick of the action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Popular Suburbs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suburbs.map((suburb) => (
              <Link key={suburb.name} href={`/search?location=${suburb.name}`} className="group">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{suburb.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Properties:</span>
                        <span className="font-semibold">{suburb.properties}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Price:</span>
                        <span className="font-semibold">{suburb.avgPrice}</span>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 p-0 h-auto">
                      View properties →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Local Branches</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {branches.map((branch) => (
              <Card key={branch.name}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{branch.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{branch.address}</p>
                    <p className="font-semibold text-foreground">{branch.phone}</p>
                  </div>
                  <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
                    <Link href="/find-branch">Visit Branch</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Auckland Central?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the ultimate urban lifestyle in the heart of New Zealand's largest city.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/search?location=Auckland Central">View Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <Link href="/find-salesperson">Contact an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
