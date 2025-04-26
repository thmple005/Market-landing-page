import Image from "next/image"
import DemoForm from "@/components/demo-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function MentorPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00] clip-corner" />

                    <div className="container mx-auto px-0 md:px-2 py-16 relative z-10">
                        <div className="grid xl:grid-cols-2 px-2 gap-8">
                            <div className="space-y-8">

                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00]">
                                    Meet Your Mentor
                                </h1>

                                <p className="text-lg font-semibold">
                                    Your Mentor – Valentine Mupfupi
                                </p>


                                <div className="flex flex-col xl:flex-row items-start lg:items-center gap-8 mt-12">
                                    <div className="flex-shrink-0 w-full md:w-80">
                                        <Image
                                            src="/mentor.png"
                                            alt="Valentine Mupfupi - Your Mentor"
                                            width={320}
                                            height={400}
                                            className="rounded-lg shadow-md object-cover w-full"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-4 text-[#1A202C]">
                                        <p>
                                            Behind every transformation is a guide who’s walked the path — and I’m here to walk it with you.
                                        </p>
                                        <p>
                                            I’m Valentine Mupfupi, a Sales & Marketing Strategist with over 20 years of
                                            real-world experience helping entrepreneurs, small businesses, medium to large{' '}
                                            organizations and creators grow with purpose.
                                        </p>
                                        <p>
                                            With extensive experience in sales and marketing across a
                                        </p>
                                    </div>
                                </div>



                                <div className="space-y-4 text-[#1A202C]">
                                    <p>wide range of industries in Ireland—and hands-on involvement in the U.S. market—I’ve had the privilege of recruiting, training, and
                                        mentoring countless professionals in the field.</p>
                                    <p>
                                        Now, I’m channelling that experience into a dedicated mentorship program designed to equip individuals
                                        with the real-world sales and marketing skills and strategies they need to grow, thrive, and
                                        succeed—whether they’re just starting out or looking to elevate their results.
                                    </p>
                                    <p>
                                        If you're ready to take your sales and marketing skills to the next level, or you're seeking practical
                                        guidance from someone who's been in the trenches, let's connect.
                                    </p>

                                    <ul className="list-none space-y-2 mt-4">
                                        <li>🎯 I don’t do fluff</li>
                                        <li>🛠️ I focus on strategy that works</li>
                                        <li>🗣️ I teach with clarity, directness, and integrity</li>
                                        <li>📩 Join the next groups</li>
                                    </ul>
                                    <p className="pt-2">
                                        And just say- Reach out to me :
                                        <span className="text-blue-600 underline font-medium">
                                            <a href="https://www.linkedin.com/in/sunil-kumar-yadav-655089100/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                                https://www.linkedin.com/in/sunil-kumar-yadav-655089100/?originalSubdomain=in
                                            </a>
                                        </span>
                                    </p>
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
