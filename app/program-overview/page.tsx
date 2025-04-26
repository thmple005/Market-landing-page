import Image from "next/image"
import DemoForm from "@/components/demo-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from 'next/link'

export default function ProgramOverView() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00] clip-corner" />

                    <div className="container mx-auto px-0 md:px-2 py-16 relative z-10">
                        <div className="grid xl:grid-cols-2 px-4 gap-8">
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00]">
                                    Program Overview
                                </h1>

                                <p className="text-lg font-semibold text-sky-600">
                                    Certified Sales & Marketing Mentorship Program
                                </p>

                                <p className="text-sm text-[#4A5568] font-medium">
                                    Accredited by the <span className="text-orange-500 font-semibold">Sales and Marketing Academy</span>
                                </p>

                                <p className="text-[#4A5568]">
                                    Ready to level up your business with a proven strategy — and get certified in the process?
                                </p>

                                <p className="text-[#4A5568]">
                                    Our 12-Week Sales & Marketing Mentorship Program is a high-impact, results-driven experience
                                    designed for individuals, entrepreneurs, freelancers, creators, and small business owners
                                    who are ready to master the art of selling and marketing with confidence.
                                </p>

                                <p className="text-[#4A5568]">
                                    This is not just coaching — it’s a certified program, backed by the Sales and Marketing Academy,
                                    combining expert mentorship, strategic training, and real-time support to transform the way
                                    you grow your business.
                                </p>

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
                                <hr className="border-gray-300" />
                                <div className="mt-8 space-y-2">
                                    <p className="text-[#0F1A2D] font-semibold flex items-center gap-2">
                                        💬 Optional 1:1 Sessions Available
                                    </p>
                                    <p className="text-[#4A5568]">
                                        For tailored support, you can also book private strategy sessions with Valentine Mupfupi
                                        <span className="ml-1">(1.5hrs ・ €250 ・ Flexible timing)</span>.
                                    </p>
                                </div>

                                <hr className="border-gray-300" />
                                <div className="mt-10">
                                    <p className="text-[#0F1A2D] font-semibold flex items-center gap-2">
                                        👥 Who This Is For
                                    </p>
                                    <ul className="list-disc ml-6 mt-2 text-[#4A5568] space-y-1">
                                        <li>Solo entrepreneurs & freelancers</li>
                                        <li>Creators, coaches & consultants</li>
                                        <li>Small business owners</li>
                                        <li>Sales & marketing professionals looking to upskill</li>
                                        <li>Early-stage startups wanting to build a strong foundation</li>
                                    </ul>
                                </div>

                                <hr className="border-gray-300" />
                                <div className="mt-10">
                                    <p className="text-[#0F1A2D] font-semibold flex items-center gap-2">
                                        💶 Investment
                                    </p>
                                    <p className="text-[#4A5568] mt-2">
                                        <strong>Group Mentorship:</strong> €85/week ・ €1020 total<br />
                                        <span className="text-sm text-[#718096]">(12-week commitment required)</span><br />
                                        <strong>Private 1:1 Sessions:</strong> €250 per session <span className="text-sm">(1.5 hrs, flexible times)</span>
                                    </p>
                                </div>

                                <hr className="border-gray-300" />
                                <div className="mt-10">
                                    <p className="text-[#0F1A2D] font-semibold flex items-center gap-2">
                                        ✉️ Ready to Apply?
                                    </p>
                                    <p className="text-[#4A5568] mt-2">
                                        Only 12 participants per cohort to ensure personalized support.<br />
                                        Apply now and reserve your spot in the upcoming May–July 2025 cohorts.
                                    </p>
                                    {/* <div className="mt-4">
                                        <Link href="/apply">
                                            <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
                                                Apply Now
                                            </button>
                                        </Link>
                                    </div> */}
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
