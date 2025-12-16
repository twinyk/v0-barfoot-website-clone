"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Users, Award, Home } from "lucide-react"
import { useState } from "react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Sell Your Property with Confidence</h1>
            <p className="text-xl text-indigo-100 mb-8 text-pretty">
              Get a free property appraisal and discover how much your home is worth with New Zealand's most trusted
              real estate agency.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Get Free Appraisal
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                Download Seller Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell With Estate & Co</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Top Market Results</h3>
              <p className="text-sm text-muted-foreground">
                We consistently achieve above-market prices for our sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">250+ experienced agents across the region.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-muted-foreground">Recognized industry leaders for over 100 years.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">Thousands of successful sales annually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Selling Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Selling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Free Appraisal", desc: "Get an accurate market valuation" },
              { step: "2", title: "Marketing Plan", desc: "Tailored strategy for your property" },
              { step: "3", title: "Professional Photos", desc: "Showcase your home at its best" },
              { step: "4", title: "Open Homes", desc: "Maximum exposure to buyers" },
              { step: "5", title: "Successful Sale", desc: "Expert negotiation for best price" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appraisal Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Request a Free Property Appraisal</CardTitle>
                <CardDescription>
                  One of our expert agents will contact you within 24 hours to arrange a no-obligation appraisal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address *</Label>
                      <Input
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Input
                        id="propertyType"
                        placeholder="e.g., House, Apartment, Townhouse"
                        required
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your property and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Request Free Appraisal
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Recent Sales in Your Area</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See what properties similar to yours have sold for recently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { suburb: "Remuera", type: "4 Bed House", price: "$2,450,000", date: "Dec 2024" },
              { suburb: "Parnell", type: "3 Bed Apartment", price: "$1,280,000", date: "Dec 2024" },
              { suburb: "Mission Bay", type: "5 Bed House", price: "$3,850,000", date: "Nov 2024" },
            ].map((sale, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{sale.suburb}</CardTitle>
                  <CardDescription>{sale.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{sale.price}</div>
                  <div className="text-sm text-muted-foreground">Sold {sale.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
