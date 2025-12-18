import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TrendingUp, Users, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const suburbs = [
  { name: "Henderson", properties: 134, avgPrice: "$895,000" },
  { name: "Te Atatu", properties: 87, avgPrice: "$920,000" },
  { name: "New Lynn", properties: 96, avgPrice: "$875,000" },
  { name: "Glen Eden", properties: 73, avgPrice: "$810,000" },
  { name: "Titirangi", properties: 45, avgPrice: "$1,150,000" },
  { name: "Piha", properties: 18, avgPrice: "$1,280,000" },
  { name: "Massey", properties: 112, avgPrice: "$865,000" },
  { name: "Swanson", properties: 52, avgPrice: "$950,000" },
]

const branches = [
  { name: "Henderson Branch", address: "234 Lincoln Road, Henderson", phone: "(09) 1234 570" },
  { name: "Te Atatu Branch", address: "56 Te Atatu Road, Te Atatu Peninsula", phone: "(09) 1234 571" },
  { name: "New Lynn Branch", address: "89 Great North Road, New Lynn", phone: "(09) 1234 572" },
]

export default function WestAucklandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image src="/west-auckland-beach-forest.jpg" alt="West Auckland" fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">West Auckland</h1>
              <p className="text-2xl mb-4">Where adventure lives</p>
              <p className="text-lg text-slate-200 leading-relaxed">
                From black sand beaches and native bush to bustling suburbs and hideaways, West Auckland offers an
                unbeatable lifestyle. Experience the perfect blend of nature and community in one of Auckland's most
                distinctive regions.
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
              <div className="text-3xl font-bold mb-1">617</div>
              <div className="text-sm text-muted-foreground">Properties Available</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">$920K</div>
              <div className="text-sm text-muted-foreground">Median Price</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">180</div>
              <div className="text-sm text-muted-foreground">Local Salespeople</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">10</div>
              <div className="text-sm text-muted-foreground">Branch Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Discover West Auckland</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                West Auckland is renowned for its wild beauty and independent spirit. The region is home to the
                spectacular Waitakere Ranges Regional Park, with hundreds of kilometers of walking tracks through
                ancient kauri forest, dramatic coastal cliffs, and pristine black sand beaches like Piha and Karekare.
              </p>
              <p>
                Beyond its natural attractions, West Auckland offers thriving commercial centers in Henderson, New Lynn,
                and Te Atatu. These hubs provide excellent shopping, dining, and entertainment options, while
                maintaining the relaxed, community-focused atmosphere the region is famous for.
              </p>
              <p>
                The housing market in West Auckland is diverse, ranging from lifestyle properties on bush-clad hills to
                modern townhouses in established suburbs. With the Northwestern Motorway providing convenient access to
                central Auckland, and the region's own vibrant local economy, West Auckland is ideal for those seeking a
                balanced lifestyle.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore West Auckland?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover the unique lifestyle and natural beauty that West Auckland has to offer.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/search?location=West Auckland">View Properties</Link>
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
