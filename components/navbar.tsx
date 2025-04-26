"use client"

import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-24">
          <div className="relative">
            <Link href="/" className="flex items-center">
              <Image
                src="/smm-logo.png"
                alt="Mentorink"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            {/* <span className="absolute top-[28px] left-[69px] text-xs font-light">
              We're not just Selling; We're Solving !
            </span> */}
          </div>

          <nav className="hidden xl:flex items-center space-x-6">
            <NavLink href="/" text="Enroll Today" />
            <NavLink href="/program-overview" text="Program Overview" />
            <NavLink href="/mentor-page" text="Meet Your Mentor" />
            {/* <NavLink href="/admin/applications" text="Admin" /> */}
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="xl:hidden focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#0F1A2D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="fullscreen" className="w-full max-w-none p-6 bg-white">
              <div className="flex justify-between items-center mb-8">
                <div className="relative">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/smm-logo.png"
                      alt="Mentorink"
                      width={150}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  {/* <span className="absolute top-[28px] left-[69px] text-xs font-light">
                    We're not just Selling; We're Solving !
                  </span> */}
                </div>
                <button onClick={() => setOpen(false)} className="text-[#0F1A2D] hover:text-[#FF6B00]">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="flex flex-col space-y-6 text-lg font-medium text-[#0F1A2D]">
                <NavLink href="/" text="Enroll Today" />
                <NavLink href="/program-overview" text="Program Overview" />
                <NavLink href="/mentor-page" text="Meet Your Mentor" />
                {/* <NavLink href="/admin" text="Admin" /> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="hover:text-[#FF6B00] transition-colors duration-300"
    >
      {text}
    </Link>
  )
}
