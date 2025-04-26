import Image from "next/image"
import DemoForm from "@/components/demo-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from 'next/link'

export default function BookDemo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00] clip-corner" />

          <div className="container mx-auto px-0 md:px-2 py-16 relative z-10">
            <div className="grid xl:grid-cols-2 px-4 gap-8">
              <div className="space-y-8">

                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00]">
                  Enroll Today
                </h1>

                <p className="text-lg font-semibold ">
                  Join the Certified Sales and Marketing Mentorship Program and get:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">12 live group sessions (1.5 hours each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">Actionable weekly lessons + templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">Feedback, accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">Private group community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A5568]">Optional 1:1 sessions for personal guidance</span>
                  </li>
                </ul>

                <div className="flex items-center gap-8">
                  <div className=" items-center gap-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        src="/mentor.png"
                        alt="Mentor Success"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1A2D]">Valentine Mupfupi</h3>
                      <Link href="/mentor-page">
                      <p className="text-[#4A5568]">Your Mentor</p>
                      </Link>
                    </div>
                  </div>
                  <div className=" items-center gap-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        src="/Customer.png"
                        alt="Customer Success"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1A2D]">Divina Mupfupi</h3>
                      <p className="text-[#4A5568]">Customer Success</p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✅</span>
                    <h2 className="font-semibold text-[#0F1A2D]">What’s Included:</h2>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mt-0.5" />
                      <span className="text-[#4A5568]">
                        <strong>12 Weekly Live Group Sessions</strong><br />
                        - 1st Cohort: Every Monday @ 7PM Irish Time (May 12 – July 28, 2025)<br />
                        - 2nd Cohort: Every Wednesday @ 7PM Irish Time (May 14 – July 30, 2025)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mt-0.5" />
                      <span className="text-[#4A5568]">
                        <strong>Step-by-Step Sales & Marketing System</strong><br />
                        From positioning and messaging to content and conversion
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mt-0.5" />
                      <span className="text-[#4A5568]">
                        <strong>Access to Templates, Tools & Worksheets</strong><br />
                        So you can apply what you learn immediately
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mt-0.5" />
                      <span className="text-[#4A5568]">
                        <strong>Private Community & Accountability</strong><br />
                        Stay motivated and on track with a group of like-minded professionals
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mt-0.5" />
                      <span className="text-[#4A5568]">
                        <strong>Certified Completion Certificate</strong><br />
                        Upon finishing the program, you’ll receive an official certification from the Sales and Marketing Academy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
