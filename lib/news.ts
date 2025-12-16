export interface NewsArticle {
  id: string
  title: string
  description: string
  image: string
  tag: string
  date: string
  author: string
  content: string[]
  stats?: {
    label: string
    value: string
  }[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: "november-housing-market",
    title: "Latest Housing Market Update",
    description: "Top end buyers return to Auckland residential housing market in November.",
    image: "/real-estate-market-report-chart.jpg",
    tag: "Market Report",
    date: "December 5, 2024",
    author: "Market Research Team",
    content: [
      "Auckland's residential housing market showed strong signs of recovery in November, with increased activity in the premium property segment. Top-end buyers returned to the market in significant numbers, driving sales volumes up by 15% compared to October.",
      "The average sale price for properties over $2 million increased by 8%, indicating renewed confidence among high-net-worth buyers. This trend is particularly evident in sought-after suburbs such as Remuera, Herne Bay, and Parnell.",
      "Market analysts attribute this resurgence to several factors: stabilizing interest rates, improved economic outlook, and pent-up demand from buyers who had been waiting on the sidelines. The spring selling season has also contributed to increased market activity.",
      "Looking ahead, industry experts predict continued momentum through the summer months, with expectations of sustained growth in both transaction volumes and property values across Auckland's premium market segments.",
    ],
    stats: [
      { label: "Average Sale Price", value: "$1.2M" },
      { label: "Sales Volume", value: "+15%" },
      { label: "Days on Market", value: "32 days" },
      { label: "Auction Success", value: "68%" },
    ],
  },
  {
    id: "november-rental-update",
    title: "Latest Monthly Rental Update",
    description: "Auckland's rental market held to its recent pattern of flat pricing in November.",
    image: "/apartment-rental.jpg",
    tag: "Rental Report",
    date: "December 3, 2024",
    author: "Rental Analysis Team",
    content: [
      "The Auckland rental market maintained its stable pricing pattern throughout November, with minimal movement in median weekly rents across most property types and regions. This marks the fifth consecutive month of price stability.",
      "Average weekly rents remained at $620 for three-bedroom homes and $480 for two-bedroom apartments. The rental market continues to show signs of equilibrium between supply and demand, creating a balanced environment for both landlords and tenants.",
      "Regional variations were minimal, though some outer suburbs saw slight increases of 2-3% as more tenants seek value for money outside the central city. Areas like Papakura, Manurewa, and Henderson showed the most modest growth.",
      "Vacancy rates held steady at around 2.8%, indicating a healthy rental market. Property managers report strong inquiry levels, with quality properties being snapped up within days of listing. The trend towards long-term tenancies continues, with average lease lengths now exceeding 18 months.",
    ],
    stats: [
      { label: "Median Weekly Rent", value: "$620" },
      { label: "Vacancy Rate", value: "2.8%" },
      { label: "Days to Lease", value: "12 days" },
      { label: "Annual Growth", value: "+1.2%" },
    ],
  },
  {
    id: "unlock-your-potential",
    title: "Unlock your potential",
    description: "Whether you're just starting or a seasoned real estate professional, join our family.",
    image: "/professional-real-estate-team.jpg",
    tag: "Careers",
    date: "November 28, 2024",
    author: "HR & Recruitment",
    content: [
      "Are you considering a career in real estate? Or perhaps you're an experienced agent looking for a supportive, growth-oriented environment? Our team is built on a foundation of excellence, collaboration, and continuous professional development.",
      "We offer comprehensive training programs for newcomers to the industry, covering everything from obtaining your license to mastering negotiation techniques and digital marketing strategies. Our mentorship program pairs new agents with seasoned professionals who provide guidance and support throughout your journey.",
      "For experienced agents, we provide advanced resources including cutting-edge technology platforms, dedicated marketing support, and access to an extensive network of industry professionals. Our competitive commission structure and performance bonuses reward your hard work and dedication.",
      "Join a team that values integrity, innovation, and exceptional client service. We invest in our people because we know that our success is built on yours. Take the next step in your real estate career and discover what's possible when you have the right support behind you.",
    ],
    stats: [
      { label: "Active Agents", value: "450+" },
      { label: "Average Experience", value: "8 years" },
      { label: "Training Programs", value: "12+" },
      { label: "Client Satisfaction", value: "4.8/5" },
    ],
  },
  {
    id: "supporting-community",
    title: "Supporting our community",
    description: "We love being a part of what makes Auckland, Northland and the Bay of Plenty great.",
    image: "/community-support-charity.jpg",
    tag: "Community",
    date: "November 20, 2024",
    author: "Community Relations",
    content: [
      "Community involvement is at the heart of what we do. Throughout 2024, we've been proud to support numerous local initiatives, charities, and community events across Auckland, Northland, and the Bay of Plenty.",
      "This year, we've partnered with local food banks, youth sports programs, and environmental conservation projects. Our team members have volunteered over 2,000 hours to various causes, from beach clean-ups to mentoring programs for at-risk youth.",
      "Our annual charity auction raised over $250,000 for local charities, with funds distributed to organizations supporting homelessness prevention, children's health services, and community education programs. Every office in our network participates in giving back to their local community.",
      "We believe that strong communities create thriving neighborhoods, which benefits everyone. As we look to 2025, we're committed to expanding our community partnerships and finding new ways to make a positive impact in the regions we serve. Together, we're building more than houses – we're building stronger communities.",
    ],
    stats: [
      { label: "Volunteer Hours", value: "2,000+" },
      { label: "Funds Raised", value: "$250K" },
      { label: "Charities Supported", value: "15+" },
      { label: "Community Events", value: "40+" },
    ],
  },
]

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}
