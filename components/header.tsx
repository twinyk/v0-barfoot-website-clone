"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, User, Phone } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">Estate & Co</div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/buy" className="text-sm font-medium hover:text-primary transition-colors">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium hover:text-primary transition-colors">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </Link>
            <Link href="/market-reports" className="text-sm font-medium hover:text-primary transition-colors">
              Market Reports
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Search Properties</DialogTitle>
                  <DialogDescription>Search by location, property type, or reference number</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSearch} className="space-y-4">
                  <Input
                    placeholder="Enter suburb, city, or property ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      Search
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsSearchOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/profile">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/saved">Saved Properties</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/searches">Saved Searches</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/alerts">Email Alerts</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="hidden md:flex gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Get in Touch</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="tel:0800123456" className="flex flex-col items-start">
                    <span className="font-semibold">Call Us</span>
                    <span className="text-xs text-muted-foreground">0800 123 456</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex flex-col items-start">
                    <span className="font-semibold">Contact Form</span>
                    <span className="text-xs text-muted-foreground">Send us a message</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/branches" className="flex flex-col items-start">
                    <span className="font-semibold">Find a Branch</span>
                    <span className="text-xs text-muted-foreground">Locate nearest office</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/agents" className="flex flex-col items-start">
                    <span className="font-semibold">Find an Agent</span>
                    <span className="text-xs text-muted-foreground">Connect with an expert</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
