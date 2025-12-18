"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, DollarSign, Home, Bell, Trash2, Play } from "lucide-react"

const savedSearches = [
  {
    id: 1,
    name: "3 Bedroom Apartments in Auckland CBD",
    criteria: {
      location: "Auckland CBD",
      propertyType: "Apartment",
      bedrooms: "3",
      priceRange: "$600,000 - $900,000",
      listingType: "Sale",
    },
    alertsEnabled: true,
    resultsCount: 24,
    lastChecked: "2024-03-18",
    createdDate: "2024-02-15",
  },
  {
    id: 2,
    name: "Family Homes in Remuera",
    criteria: {
      location: "Remuera",
      propertyType: "House",
      bedrooms: "4+",
      priceRange: "$1,200,000+",
      listingType: "Sale",
    },
    alertsEnabled: true,
    resultsCount: 12,
    lastChecked: "2024-03-18",
    createdDate: "2024-03-01",
  },
  {
    id: 3,
    name: "Rental Properties Stonefields",
    criteria: {
      location: "Stonefields",
      propertyType: "Any",
      bedrooms: "2-3",
      priceRange: "$500-$700/week",
      listingType: "Rental",
    },
    alertsEnabled: false,
    resultsCount: 8,
    lastChecked: "2024-03-17",
    createdDate: "2024-03-10",
  },
]

export default function SavedSearchesPage() {
  const [searches, setSearches] = useState(savedSearches)

  const handleDelete = (id: number) => {
    setSearches(searches.filter((s) => s.id !== id))
  }

  const toggleAlerts = (id: number) => {
    setSearches(searches.map((s) => (s.id === id ? { ...s, alertsEnabled: !s.alertsEnabled } : s)))
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Saved Searches</h1>
          <p className="text-slate-600">Manage your saved property searches and email alerts</p>
        </div>

        {searches.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No saved searches yet</h3>
              <p className="text-slate-600 mb-6">Save your property searches to get instant notifications</p>
              <Button asChild>
                <Link href="/search">Start Searching</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {searches.map((search) => (
              <Card key={search.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{search.name}</CardTitle>
                      <CardDescription>Created on {new Date(search.createdDate).toLocaleDateString()}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {search.alertsEnabled && (
                        <Badge className="gap-1">
                          <Bell className="h-3 w-3" />
                          Alerts On
                        </Badge>
                      )}
                      <Badge variant="secondary">{search.resultsCount} results</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Location</p>
                        <p className="text-sm text-slate-600">{search.criteria.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Property Type</p>
                        <p className="text-sm text-slate-600">{search.criteria.propertyType}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Price Range</p>
                        <p className="text-sm text-slate-600">{search.criteria.priceRange}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Bedrooms</p>
                        <p className="text-sm text-slate-600">{search.criteria.bedrooms}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-sm text-slate-500">
                      Last checked: {new Date(search.lastChecked).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                        <Link href={`/search?saved=${search.id}`}>
                          <Play className="h-4 w-4" />
                          Run Search
                        </Link>
                      </Button>
                      <Button
                        variant={search.alertsEnabled ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() => toggleAlerts(search.id)}
                      >
                        <Bell className="h-4 w-4" />
                        {search.alertsEnabled ? "Alerts On" : "Enable Alerts"}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(search.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
