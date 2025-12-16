import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Buy</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/buy/residential" className="hover:text-white transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/buy/apartments" className="hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/buy/lifestyle" className="hover:text-white transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/buy/commercial" className="hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rent</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/rent/properties" className="hover:text-white transition-colors">
                  Rental Properties
                </Link>
              </li>
              <li>
                <Link href="/rent/apply" className="hover:text-white transition-colors">
                  Apply to Rent
                </Link>
              </li>
              <li>
                <Link href="/rent/tenants" className="hover:text-white transition-colors">
                  For Tenants
                </Link>
              </li>
              <li>
                <Link href="/rent/landlords" className="hover:text-white transition-colors">
                  For Landlords
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/sell/appraisal" className="hover:text-white transition-colors">
                  Get an Appraisal
                </Link>
              </li>
              <li>
                <Link href="/sell/commission" className="hover:text-white transition-colors">
                  Commission Rates
                </Link>
              </li>
              <li>
                <Link href="/sell/marketing" className="hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/sell/sold" className="hover:text-white transition-colors">
                  Sold Properties
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/market-reports" className="hover:text-white transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">Estate & Co</div>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-sm text-slate-400">© 2025 Estate & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
