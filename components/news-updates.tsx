import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const updates = [
  {
    image: "/real-estate-market-report-chart.jpg",
    title: "Latest Housing Market Update",
    description: "Top end buyers return to Auckland residential housing market in November.",
    link: "/news/november-housing-market",
    tag: "Market Report",
  },
  {
    image: "/apartment-rental.jpg",
    title: "Latest Monthly Rental Update",
    description: "Auckland's rental market held to its recent pattern of flat pricing in November.",
    link: "/news/november-rental-update",
    tag: "Rental Report",
  },
  {
    image: "/professional-real-estate-team.jpg",
    title: "Unlock your potential",
    description: "Whether you're just starting or a seasoned real estate professional, join our family.",
    link: "/news/unlock-your-potential",
    tag: "Careers",
  },
  {
    image: "/community-support-charity.jpg",
    title: "Supporting our community",
    description: "We love being a part of what makes Auckland, Northland and the Bay of Plenty great.",
    link: "/news/supporting-community",
    tag: "Community",
  },
]

export function NewsUpdates() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Latest news & updates</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((update) => (
            <Link key={update.title} href={update.link} className="group">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{update.tag}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{update.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
