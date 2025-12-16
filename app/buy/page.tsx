import { Suspense } from "react"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal, MapPin } from "lucide-react"

export const metadata = {
  title: "Buy Property | Estate & Co",
  description: "Find your dream home. Browse houses, apartments, and properties for sale.",
}

export default function BuyPage() {
  const buyProperties = properties.filter((p) => p.type === "buy")

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Find Your Dream Home</h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Browse our extensive collection of properties for sale across Auckland and beyond.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input placeholder="Suburb, city or region..." className="h-12" />
              </div>
              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Button variant="outline" className="w-full h-12 gap-2 bg-transparent">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full h-12">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{buyProperties.length}</div>
              <div className="text-sm text-muted-foreground">Properties Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Suburbs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$895K</div>
              <div className="text-sm text-muted-foreground">Avg. Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">247</div>
              <div className="text-sm text-muted-foreground">Sold This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suburbs */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Browse by Popular Suburbs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Remuera", "Ponsonby", "Parnell", "Mission Bay", "St Heliers", "Herne Bay"].map((suburb) => (
              <Button key={suburb} variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{suburb}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Properties for Sale</h2>
              <p className="text-muted-foreground">{buyProperties.length} properties found</p>
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Suspense fallback={<div>Loading properties...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
    </main>
  )
}
