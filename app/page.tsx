import { Header } from "@/components/header"
import { HeroSearch } from "@/components/hero-search"
import { QuickLinks } from "@/components/quick-links"
import { NewsUpdates } from "@/components/news-updates"
import { NetworkReach } from "@/components/network-reach"
import { FindUs } from "@/components/find-us"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSearch />
        <QuickLinks />
        <NewsUpdates />
        <NetworkReach />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}
