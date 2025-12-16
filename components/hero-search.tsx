"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSearch() {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const listingType = activeTab === "buy" ? "sale" : "rent"
    router.push(`/search?q=${encodeURIComponent(searchQuery)}&type=${listingType}`)
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/modern-real-estate-cityscape.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Find Your Dream Property</h1>
          <p className="text-lg md:text-xl text-slate-200">
            Discover exceptional homes across Auckland, Northland, Bay of Plenty & Waikato
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="bg-white rounded-t-lg p-2 flex gap-2">
              <Button
                type="button"
                variant={activeTab === "buy" ? "default" : "ghost"}
                onClick={() => setActiveTab("buy")}
                className="flex-1"
              >
                Buy
              </Button>
              <Button
                type="button"
                variant={activeTab === "rent" ? "default" : "ghost"}
                onClick={() => setActiveTab("rent")}
                className="flex-1"
              >
                Rent
              </Button>
            </div>

            <div className="bg-white rounded-b-lg p-6 shadow-xl">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter suburb, city or region"
                  className="flex-1 h-12 text-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="lg" className="h-12 px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
