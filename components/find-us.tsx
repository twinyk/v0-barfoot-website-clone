import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Building, UserCog } from "lucide-react"

const options = [
  {
    icon: Users,
    title: "Find a salesperson",
    description:
      "Not sure which of our 1,800+ agents to call? Use our agent search to find the one who's perfect for your needs.",
    link: "/find-salesperson",
  },
  {
    icon: Building,
    title: "Find a branch",
    description: "Find the Estate & Co branch in your neighbourhood.",
    link: "/find-branch",
  },
  {
    icon: UserCog,
    title: "Find a property manager",
    description: "We have property managers in branches all over Auckland, Northland, Bay of Plenty and Waikato.",
    link: "/find-property-manager",
  },
]

export function FindUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Find us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((option) => (
            <Link key={option.title} href={option.link} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary/10 rounded-full">
                    <option.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{option.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
