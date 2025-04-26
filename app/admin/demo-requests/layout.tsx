import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin: Demo Requests | Mentorink",
  description: "Admin panel for managing demo requests",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-100">{children}</div>
}
