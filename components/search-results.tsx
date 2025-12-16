"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { searchProperties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""
  const initialType = (searchParams.get("type") as "rent" | "sale" | "all") || "all"

  const [query, setQuery] = useState(initialQuery)
  const [listingType, setListingType] = useState<"rent" | "sale" | "all">(initialType)
  const [results, setResults] = useState(searchProperties(initialQuery, initialType))

  useEffect(() => {
    setResults(searchProperties(initialQuery, initialType))
  }, [initialQuery, initialType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}&type=${listingType}`)
    setResults(searchProperties(query, listingType))
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Property Search</h1>

        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-4 mb-4">
            <Button
              type="button"
              variant={listingType === "all" ? "default" : "outline"}
              onClick={() => setListingType("all")}
            >
              All
            </Button>
            <Button
              type="button"
              variant={listingType === "sale" ? "default" : "outline"}
              onClick={() => setListingType("sale")}
            >
              Buy
            </Button>
            <Button
              type="button"
              variant={listingType === "rent" ? "default" : "outline"}
              onClick={() => setListingType("rent")}
            >
              Rent
            </Button>
          </div>

          <div className="flex gap-4">
            <Input
              placeholder="Enter suburb, city or region"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </form>

        <p className="text-muted-foreground">
          Found {results.length} {results.length === 1 ? "property" : "properties"}
          {initialQuery && ` matching "${initialQuery}"`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">No properties found</p>
          <p className="text-sm text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}
