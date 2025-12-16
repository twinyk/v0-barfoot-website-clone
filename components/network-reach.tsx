import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const regions = [
  {
    image: "/auckland-map-suburbs.jpg",
    title: "Our regions and suburbs",
    description: "We service the Upper North Island with over 80 branches and 1,800+ salespeople.",
    link: "/regions",
  },
  {
    image: "/south-auckland-diverse-community.jpg",
    title: "South Auckland. Where it all comes together.",
    description: "Big on culture, strong on community and growing fast, South Auckland has a rhythm all its own.",
    link: "/regions/south-auckland",
  },
  {
    image: "/west-auckland-beach-forest.jpg",
    title: "West Auckland, where adventure lives",
    description: "From black sand beaches and native bush to bustling suburbs and hideaways.",
    link: "/regions/west-auckland",
  },
  {
    image: "/auckland-cbd-harbor-skyline.jpg",
    title: "Auckland Central. Right at the heart of it all.",
    description: "Between the harbour and the hills, Auckland Central offers a city lifestyle like no other.",
    link: "/regions/auckland-central",
  },
]

export function NetworkReach() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Our network & reach</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Link key={region.title} href={region.link} className="group">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={region.image || "/placeholder.svg"}
                    alt={region.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{region.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{region.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
