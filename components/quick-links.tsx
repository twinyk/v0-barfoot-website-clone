import Link from "next/link"
import { Gavel, Grid, Home, Briefcase } from "lucide-react"

const links = [
  {
    icon: Gavel,
    label: "Auctions",
    href: "/auctions",
  },
  {
    icon: Grid,
    label: "Our commission rates",
    href: "/commission",
  },
  {
    icon: Home,
    label: "Recent sales",
    href: "/recent-sales",
  },
  {
    icon: Briefcase,
    label: "Careers",
    href: "/careers",
  },
]

export function QuickLinks() {
  return (
    <section className="border-b bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <link.icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-center">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
