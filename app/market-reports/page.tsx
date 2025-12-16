import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Download, BarChart3, Home, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Market Reports | Estate & Co",
  description: "Stay informed with the latest Auckland property market insights, trends, and data.",
}

export default function MarketReportsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">Market Reports & Insights</h1>
            <p className="text-xl text-purple-100 mb-8 text-pretty">
              Access comprehensive data, trends, and analysis to make informed property decisions in New Zealand's
              dynamic real estate market.
            </p>
            <Button size="lg" variant="secondary">
              Download Latest Report
            </Button>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">December 2024 Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Median House Price</CardDescription>
                <CardTitle className="text-3xl">$1,125,000</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+3.2% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Properties Sold</CardDescription>
                <CardTitle className="text-3xl">847</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-red-600 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-5.1% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Days on Market</CardDescription>
                <CardTitle className="text-3xl">32</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-2 days from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Median Rent (pw)</CardDescription>
                <CardTitle className="text-3xl">$650</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+1.6% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Reports */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Regional Market Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "Auckland Central",
                median: "$1,450,000",
                change: "+4.2%",
                sales: 234,
                positive: true,
              },
              {
                region: "North Shore",
                median: "$1,280,000",
                change: "+2.8%",
                sales: 189,
                positive: true,
              },
              {
                region: "West Auckland",
                median: "$925,000",
                change: "-1.2%",
                sales: 156,
                positive: false,
              },
              {
                region: "South Auckland",
                median: "$875,000",
                change: "+3.5%",
                sales: 178,
                positive: true,
              },
              {
                region: "East Auckland",
                median: "$1,150,000",
                change: "+2.1%",
                sales: 145,
                positive: true,
              },
              {
                region: "Bay of Plenty",
                median: "$795,000",
                change: "+1.9%",
                sales: 98,
                positive: true,
              },
            ].map((region) => (
              <Card key={region.region}>
                <CardHeader>
                  <CardTitle className="text-lg">{region.region}</CardTitle>
                  <CardDescription>{region.sales} sales this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">{region.median}</div>
                      <div
                        className={`text-sm flex items-center ${region.positive ? "text-green-600" : "text-red-600"}`}
                      >
                        {region.positive ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {region.change}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Type Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Property Type Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Houses</CardTitle>
                  <Home className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold">$1,285,000</div>
                    <div className="text-sm text-muted-foreground">Median price</div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+3.8% monthly growth</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Apartments</CardTitle>
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold">$785,000</div>
                    <div className="text-sm text-muted-foreground">Median price</div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+2.1% monthly growth</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Townhouses</CardTitle>
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold">$945,000</div>
                    <div className="text-sm text-muted-foreground">Median price</div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+4.2% monthly growth</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Reports Archive */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Monthly Reports Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { month: "December 2024", released: "Jan 5, 2025" },
              { month: "November 2024", released: "Dec 5, 2024" },
              { month: "October 2024", released: "Nov 5, 2024" },
              { month: "September 2024", released: "Oct 5, 2024" },
            ].map((report) => (
              <Card key={report.month}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{report.month}</CardTitle>
                      <CardDescription>Released {report.released}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Related Market News</h2>
            <Button variant="link" asChild>
              <Link href="/news">View All News →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q4 Market Analysis Shows Strong Growth</CardTitle>
                <CardDescription>Dec 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Auckland property market demonstrates resilience with steady price increases...
                </p>
                <Button variant="link" className="p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">First Home Buyers Drive Market Activity</CardTitle>
                <CardDescription>Dec 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  New data reveals first home buyers represent 25% of all sales...
                </p>
                <Button variant="link" className="p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rental Market Remains Competitive</CardTitle>
                <CardDescription>Dec 5, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Strong tenant demand continues to push rental prices upward...
                </p>
                <Button variant="link" className="p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
