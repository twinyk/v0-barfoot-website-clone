import Link from "next/link"
import type { Property } from "@/lib/properties"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Car, MapPin } from "lucide-react"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 bg-muted">
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-3 right-3 bg-background/90 text-foreground hover:bg-background">
            {property.listingType === "rent" ? "For Rent" : "For Sale"}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2">{property.title}</h3>
          </div>

          <div className="flex items-center text-sm text-muted-foreground mb-3 gap-1">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1">
              {property.suburb}, {property.city}
            </span>
          </div>

          <p className="text-2xl font-bold text-primary mb-4">{property.priceDisplay}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span>{property.parking}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
