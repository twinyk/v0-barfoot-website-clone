import { properties } from "@/lib/properties"
import { RequestInformationForm } from "@/components/request-information-form"
import { notFound } from "next/navigation"

export default async function RequestInformationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return <RequestInformationForm property={property} />
}
