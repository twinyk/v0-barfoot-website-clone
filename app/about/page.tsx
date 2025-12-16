import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Home, TrendingUp, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "About Us | Estate & Co",
  description: "Learn about New Zealand's leading real estate agency with over 100 years of experience.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">About Estate & Co</h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              For over 100 years, we've been helping New Zealanders buy, sell, and rent properties with integrity,
              expertise, and genuine care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1923, Estate & Co has grown from a small Auckland office to become New Zealand's largest
                  and most successful real estate company. Our journey has been built on a foundation of trust,
                  innovation, and an unwavering commitment to our clients.
                </p>
                <p>
                  Today, we operate over 65 branches across Auckland, Northland, Bay of Plenty, and Waikato, employing
                  more than 1,800 dedicated professionals who are passionate about property and people.
                </p>
                <p>
                  Our success is measured not just in properties sold, but in the relationships we build and the
                  communities we serve. Every transaction is handled with the same care and attention, whether it's a
                  first home or a multi-million dollar estate.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-slate-200 rounded-lg overflow-hidden">
              <Image src="/historic-real-estate-office-building.jpg" alt="Estate & Co historic office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,800+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">65+</div>
              <div className="text-sm text-muted-foreground">Branch Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Annual Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity First</h3>
                <p className="text-muted-foreground">
                  We believe in doing what's right, not what's easy. Honesty and transparency guide every interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Focused</h3>
                <p className="text-muted-foreground">
                  Your goals become our mission. We're committed to delivering exceptional results and experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace technology and new ideas to provide cutting-edge solutions for modern real estate needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We set high standards and strive to exceed them. Mediocrity is not in our vocabulary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We're invested in the communities we serve, supporting local initiatives and giving back.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to sustainable practices that protect our environment for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Peter Thompson", role: "Managing Director", experience: "35 years" },
              { name: "Sarah Mitchell", role: "Chief Operations Officer", experience: "28 years" },
              { name: "David Chen", role: "Chief Technology Officer", experience: "15 years" },
              { name: "Emma Williams", role: "Director of Sales", experience: "22 years" },
            ].map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 overflow-hidden">
                  <Image
                    src={`/professional-headshot.png?height=200&width=200&query=professional headshot ${leader.name}`}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{leader.role}</p>
                <p className="text-xs text-muted-foreground">{leader.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { award: "Best Real Estate Agency", year: "2024", org: "NZ Property Awards" },
              { award: "Excellence in Customer Service", year: "2023", org: "Real Estate Institute" },
              { award: "Innovation in PropTech", year: "2023", org: "Tech Excellence Awards" },
              { award: "Community Impact Award", year: "2022", org: "Auckland Business Chamber" },
              { award: "Top Sales Performance", year: "2022", org: "National Real Estate Awards" },
              { award: "Employer of Choice", year: "2021", org: "HR Excellence Awards" },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.award}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.org} · {item.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
            We're always looking for talented, passionate individuals to join New Zealand's leading real estate company.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">View Careers</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
