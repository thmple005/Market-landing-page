"use client"

import { useState } from "react"
import { submitDemoRequest } from "@/app/actions"
import Link from "next/link"
import { Loader2 } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Checkbox } from "./ui/checkbox"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import React from "react"

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setIsLoading(true)

    try {
      const mentorshipSelections = formData.getAll("mentorShip")
      const formEntries = Object.fromEntries(formData.entries())
      console.log("Submitted form values:", {
        ...formEntries,
        mentorShip: mentorshipSelections,
      })
      const result = await submitDemoRequest(formData)
      if (result.success) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0F1A2D] text-white rounded-lg p-8 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Apply for the 12-Week Certified “Sales & Marketing Mentorship” Program:</h2>

      {isSuccess ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-4">Thanks for applying!</h3>
          <p className="mb-6">We’ll review your application and be in touch within 24–48 hours. If accepted, you’ll receive an email with the next steps to confirm your spot and access onboarding materials.</p>
          <a
            href="/"
            className="inline-block bg-[#FF6B00] text-white font-medium py-2 px-6 rounded-md hover:bg-[#E05F00] transition-colors"
          >
            Return to Home
          </a>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-4">
          {/* <p className="text-lg font-semibold mb-4">Contact Information</p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid email address.")}
                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                pattern="[0-9]+"
                inputMode="numeric"
                className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter digits only.")}
                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
              />
            </div>
            <div>
              <input
                type="url"
                name="instagram_link"
                placeholder="Instagram or LinkedIn Handle"
                required
                className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />
            </div>
          </div>

          {/* <p className="text-lg font-semibold mb-4">Business Info </p> */}

          <div>
            <textarea
              name="business_message"
              placeholder="What is your business or offer?"
              rows={2}
              className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            ></textarea>
          </div>

          <div>
            <textarea
              name="challange_message"
              placeholder="What are your biggest challenges right now in sales and marketing?"
              rows={2}
              className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            ></textarea>
          </div>

          <div>
            <textarea
              name="get_out_program_message"
              placeholder="What are you hoping to get out of this program?"
              rows={2}
              className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            ></textarea>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Have you worked with a coach/mentor before?</p>
            <RadioGroup name="mentorship_experience">
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="mentor-yes" value="Yes" />
                <Label htmlFor="mentor-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="mentor-no" value="No" />
                <Label htmlFor="mentor-no">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="mentor-sortof" value="Sort of — in a group or course setting" />
                <Label htmlFor="mentor-sortof">Sort of — in a group or course setting</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Are you able to commit to the full 12-week program (€1020 total)?</p>
            <RadioGroup name="program_commitment">
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="commit-yes" value="Yes, I’m ready to invest and commit" />
                <Label htmlFor="commit-yes">Yes, I’m ready to invest and commit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="commit-maybe" value="Not yet, but I’m seriously considering it" />
                <Label htmlFor="commit-maybe">Not yet, but I’m seriously considering it</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="commit-alt" value="I'd prefer to just book a 1:1 session (€250)" />
                <Label htmlFor="commit-alt">I'd prefer to just book a 1:1 session (€250)</Label>
              </div>
            </RadioGroup>
          </div>

          <CheckboxGroup
            label="Would you like to be considered for private 1:1 mentorship as well?"
            name="mentorShip"
            options={[
              { id: "private-yes", label: "Yes, I’m interested in 1:1 sessions", value: "Yes, I’m interested in 1:1 sessions" },
              { id: "private-no", label: "No thanks, just the group program", value: "No thanks, just the group program" },
              { id: "private-maybe", label: "Maybe later", value: "Maybe later" },
            ]}
          />

          {/* <p className="text-lg font-semibold mb-4">Program Fit & Commitment</p> */}

          <div>
            <textarea
              name="message"
              placeholder="Do you have any questions or additional information you'd like to share? We’d also love to hear about your expectations and the outcomes you’re hoping to achieve."
              rows={3}
              className="w-full bg-[#1A2A40] border border-[#2D3A4F] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FF6B00] text-white font-medium py-3 px-8 rounded-md hover:bg-[#E05F00] transition-colors disabled:opacity-70"
            >
              {/* {isSubmitting ? "Apply Now..." : "Apply Now"} */}
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        </form>
      )}

      {/* <div className="mt-6 bg-[#F1F5F9] text-[#0F1A2D] p-4 rounded-md text-center">
        <p>
          Are you ready to book a meeting with us? Secure your slot here{" "}
          <Link href="/schedule-meeting" className="text-[#FF6B00] font-medium hover:underline">
            Schedule a Meeting
          </Link>
        </p>
      </div> */}
    </div>
  )
}

function CheckboxGroup({ label, name, options }: { label: string; name: string; options: { id: string; label: string; value: string }[] }) {
  return (
    <div>
      <p className="text-base font-medium mb-2">{label}</p>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox id={option.id} name={name} value={option.value} />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}