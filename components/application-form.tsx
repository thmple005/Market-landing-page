"use client"

import { useState } from "react"
// import { submitApplication } from "@/app/actions/application"

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [privateChecked, setPrivateChecked] = useState(false)
  const [groupChecked, setGroupChecked] = useState(true)
  const [laterChecked, setLaterChecked] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      // Collect checkbox values
      const privateInterest = privateChecked ? "Yes, I'm interested in 1:1 sessions" : ""
      const groupInterest = groupChecked ? "No thanks, just the group program" : ""
      const laterInterest = laterChecked ? "Maybe later" : ""

      // Combine checkbox values
      const privateOptions = [privateInterest, groupInterest, laterInterest].filter(Boolean).join(", ")

      // Add to form data
      formData.append("private_mentorship", privateOptions)

      // const result = await submitApplication(formData)
      // if (result.success) {
      //   setIsSuccess(true)
      //   window.scrollTo(0, 0)
      // }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {isSuccess ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4 text-[#0F1A2D]">Thanks for applying!</h3>
          <p className="mb-6 text-[#4A5568]">
            We'll review your application and be in touch within 24–48 hours. If accepted, you'll receive an email with
            the next steps to confirm your spot and access onboarding materials.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-[#FF6B00] text-white font-medium py-2 px-6 rounded-md hover:bg-[#E05F00] transition-colors"
          >
            Return to Home
          </button>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#0F1A2D]">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="social_handle" className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram or LinkedIn Handle <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="social_handle"
                  name="social_handle"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#0F1A2D]">Business Info</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="business_description" className="block text-sm font-medium text-gray-700 mb-1">
                  What is your business or offer? <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Describe what you sell, your target audience, and what stage you're at
                </p>
                <textarea
                  id="business_description"
                  name="business_description"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                ></textarea>
              </div>
              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your biggest challenges right now in sales and marketing?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                ></textarea>
              </div>
              <div>
                <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
                  What are you hoping to get out of this program? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Have you worked with a coach/mentor before? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mentor_yes"
                      name="previous_mentorship"
                      value="Yes"
                      required
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="mentor_yes" className="ml-2 block text-sm text-gray-700">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mentor_no"
                      name="previous_mentorship"
                      value="No"
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="mentor_no" className="ml-2 block text-sm text-gray-700">
                      No
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mentor_sort_of"
                      name="previous_mentorship"
                      value="Sort of — in a group or course setting"
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="mentor_sort_of" className="ml-2 block text-sm text-gray-700">
                      Sort of — in a group or course setting
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Fit & Commitment */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#0F1A2D]">Program Fit & Commitment</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you able to commit to the full 12-week program (€1020 total)?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="commit_yes"
                      name="program_commitment"
                      value="Yes, I'm ready to invest and commit"
                      required
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="commit_yes" className="ml-2 block text-sm text-gray-700">
                      Yes, I'm ready to invest and commit
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="commit_considering"
                      name="program_commitment"
                      value="Not yet, but I'm seriously considering it"
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="commit_considering" className="ml-2 block text-sm text-gray-700">
                      Not yet, but I'm seriously considering it
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="commit_session"
                      name="program_commitment"
                      value="I'd prefer to just a 1:1 session (€250)"
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300"
                    />
                    <label htmlFor="commit_session" className="ml-2 block text-sm text-gray-700">
                      I'd prefer to just book a 1:1 session (€250)
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Would you like to be considered for private 1:1 mentorship as well?
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="private_yes"
                      checked={privateChecked}
                      onChange={() => setPrivateChecked(!privateChecked)}
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300 rounded"
                    />
                    <label htmlFor="private_yes" className="ml-2 block text-sm text-gray-700">
                      Yes, I'm interested in 1:1 sessions
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="private_no"
                      checked={groupChecked}
                      onChange={() => setGroupChecked(!groupChecked)}
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300 rounded"
                    />
                    <label htmlFor="private_no" className="ml-2 block text-sm text-gray-700">
                      No thanks, just the group program
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="private_maybe"
                      checked={laterChecked}
                      onChange={() => setLaterChecked(!laterChecked)}
                      className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300 rounded"
                    />
                    <label htmlFor="private_maybe" className="ml-2 block text-sm text-gray-700">
                      Maybe later
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Notes */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#0F1A2D]">Final Notes</h2>
            <div>
              <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-1">
                Do you have any questions or additional information you'd like to share?
              </label>
              <p className="text-sm text-gray-500 mb-2">
                We'd also love to hear about your expectations and the outcomes you're hoping to achieve.
              </p>
              <textarea
                id="additional_notes"
                name="additional_notes"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              ></textarea>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FF6B00] text-white font-medium py-3 px-8 rounded-md hover:bg-[#E05F00] transition-colors disabled:opacity-70 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
