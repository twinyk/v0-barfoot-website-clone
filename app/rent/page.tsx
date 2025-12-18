import { Suspense } from "react"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal } from "lucide-react"

export const metadata = {
  title: "Rent Property | Estate & Co",
  description: "Find your perfect rental home. Browse houses, apartments, and properties for rent.",
}

export default function RentPage() {
  const rentProperties = properties.filter((p) => p.type === "rent")

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Find Your Perfect Rental</h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Discover quality rental properties across Auckland with flexible lease options.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input placeholder="Suburb, city or region..." className="h-12 text-slate-900" />
              </div>
              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-12 text-slate-900">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Button variant="outline" className="w-full h-12 gap-2 bg-white text-slate-900 border-slate-300">
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
              <div className="text-3xl font-bold text-primary mb-2">{rentProperties.length}</div>
              <div className="text-sm text-muted-foreground">Rentals Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Suburbs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$620</div>
              <div className="text-sm text-muted-foreground">Avg. Weekly Rent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156</div>
              <div className="text-sm text-muted-foreground">Leased This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Guide */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Rental Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Tenant Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Everything you need to know about renting in New Zealand.
              </p>
              <Button variant="link" className="p-0">
                Learn More →
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Application Tips</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stand out from other applicants with our expert advice.
              </p>
              <Button variant="link" className="p-0">
                Learn More →
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Rental Calculator</h3>
              <p className="text-sm text-muted-foreground mb-4">Calculate your rental budget and affordability.</p>
              <Button variant="link" className="p-0">
                Calculate →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Properties for Rent</h2>
              <p className="text-muted-foreground">{rentProperties.length} properties found</p>
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Rent: Low to High</SelectItem>
                <SelectItem value="price-high">Rent: High to Low</SelectItem>
                <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Suspense fallback={<div>Loading properties...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
    </main>
  )
}
