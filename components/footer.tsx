import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F1A2D] text-white pt-16 pb-8">
      <div className="container mx-auto px-10 xl:px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/smm-logo.png?height=40&width=150"
                alt="Mentorink"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">The ultimate mentoring program for individuals, companies and communities.</p>
            <p className="text-gray-300">Empowering people through smart mentoring !</p>
            <div className="flex space-x-4 mt-6">
              <a target="_blank"
                rel="noopener noreferrer" href="https://www.instagram.com/salesandmarketing.academy/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a target="_blank"
                rel="noopener noreferrer" href="https://www.linkedin.com/company/sales-and-marketing-academy" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a target="_blank"
                rel="noopener noreferrer" href="https://www.youtube.com/@SalesandMarketing.Academy" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a target="_blank"
                rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61575448197123" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Enroll Today
                </Link>
              </li>
              <li>
                <Link href="/program-overview" className="text-gray-300 hover:text-white transition-colors">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link href="/mentor-page" className="text-gray-300 hover:text-white transition-colors">
                  Meet Your Mentor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Join our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1A2A40] border border-[#2D3A4F] rounded-l-md p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] flex-1"
              />
              <button
                type="submit"
                className="bg-[#FF6B00] text-white px-4 py-2 rounded-r-md hover:bg-[#E05F00] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
