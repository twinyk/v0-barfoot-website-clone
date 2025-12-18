import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const suburbs = [
  { name: "Manukau", properties: 156, avgPrice: "$820,000" },
  { name: "Papatoetoe", properties: 98, avgPrice: "$765,000" },
  { name: "Otara", properties: 72, avgPrice: "$695,000" },
  { name: "Mangere", properties: 84, avgPrice: "$710,000" },
  { name: "Papakura", properties: 63, avgPrice: "$680,000" },
  { name: "Pukekohe", properties: 91, avgPrice: "$795,000" },
  { name: "Manurewa", properties: 77, avgPrice: "$705,000" },
  { name: "Flat Bush", properties: 105, avgPrice: "$850,000" },
]

const branches = [
  { name: "Manukau Branch", address: "123 Great South Road, Manukau", phone: "(09) 1234 567" },
  { name: "Papakura Branch", address: "45 Broadway, Papakura", phone: "(09) 1234 568" },
  { name: "Pukekohe Branch", address: "78 King Street, Pukekohe", phone: "(09) 1234 569" },
]

export default function SouthAucklandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/south-auckland-diverse-community.jpg"
          alt="South Auckland"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">South Auckland</h1>
              <p className="text-2xl mb-4">Where it all comes together</p>
              <p className="text-lg text-slate-200 leading-relaxed">
                Big on culture, strong on community and growing fast, South Auckland has a rhythm all its own. From
                established family neighborhoods to brand new developments, this diverse region offers exceptional value
                and opportunity.
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
              <div className="text-3xl font-bold mb-1">746</div>
              <div className="text-sm text-muted-foreground">Properties Available</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">$750K</div>
              <div className="text-sm text-muted-foreground">Median Price</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">220</div>
              <div className="text-sm text-muted-foreground">Local Salespeople</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm text-muted-foreground">Branch Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Discover South Auckland</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                South Auckland is one of New Zealand's most dynamic and fastest-growing regions. With its rich cultural
                diversity, strong community spirit, and affordable housing options, it's becoming an increasingly
                popular choice for families, first-home buyers, and investors alike.
              </p>
              <p>
                The region boasts excellent transport links, with the Southern Motorway providing quick access to
                central Auckland and beyond. Major shopping centers like Westfield Manukau and The Plaza at Papakura
                offer comprehensive retail and dining options, while new developments continue to enhance the area's
                amenities.
              </p>
              <p>
                From the established suburbs of Papatoetoe and Mangere to the rapidly developing areas of Flat Bush and
                Ormiston, South Auckland offers diverse housing options at competitive prices. The region is also home
                to beautiful parks, recreational facilities, and a thriving arts and cultural scene.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore South Auckland?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our local experts know South Auckland inside out and can help you find your perfect property.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/search?location=South Auckland">View Properties</Link>
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
