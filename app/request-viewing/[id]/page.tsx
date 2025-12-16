import { properties } from "@/lib/properties"
import { RequestViewingForm } from "@/components/request-viewing-form"
import { notFound } from "next/navigation"

export default async function RequestViewingPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return <RequestViewingForm property={property} />
}
