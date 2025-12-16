import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/properties"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyDetail } from "@/components/property-detail"

interface PropertyPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PropertyDetail property={property} />
      </main>
      <Footer />
    </div>
  )
}
