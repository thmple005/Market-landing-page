"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Application {
  id: number
  name: string
  email: string
  phone_number: string
  business_message: string
  challange_message: string | null
  get_out_program_message: string
  instagram_link: string | null
  linked_in_link: string | null
  mentorship_experience: string
  program_commitment: string
  mentorShipResult: {
    id: number
    mentor_value: string | null
    author_id: string
  }[]
  message: string
}

interface Pagination {
  offset: number
  limit: number
  total?: number
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://market-landing-page-kt86.vercel.app/"
const apiKey = "your_api_key_here"

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 10 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const fetchApplications = async () => {
    setLoading(true)
    setError(null)

    try {
      const page = pagination.offset / pagination.limit + 1
      const response = await fetch(
        `${baseUrl}api/demo-request?page=${page}&limit=${pagination.limit}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()
      console.log("Fetched applications:", result)

      if (result?.data) {
        setApplications(result.data)

        if (result.pagination?.total) {
          setPagination((prev) => ({
            ...prev,
            total: result.pagination.total,
          }))
        }
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }





  useEffect(() => {
    fetchApplications()
  }, [pagination.offset])

  const handleNext = () => {
    setPagination((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }))
  }

  const handlePrev = () => {
    setPagination((prev) => ({
      ...prev,
      offset: Math.max(prev.offset - prev.limit, 0),
    }))
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <div className="p-6 w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sales and Marketing Mentorship</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="w-full overflow-auto">
            <table className="min-w-[1000px] w-full text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Social Link</th>
                  <th className="p-2 border">Business</th>
                  <th className="p-2 border">Challenge</th>
                  <th className="p-2 border">Get Out Program Message</th>
                  <th className="p-2 border">Mentorship Experience</th>
                  <th className="p-2 border">Commitment</th>
                  <th className="p-2 border">MentorShip Result</th>
                  <th className="p-2 border">Message</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-t">
                    <td className="p-2 border">{app.name}</td>
                    <td className="p-2 border">{app.email}</td>
                    <td className="p-2 border">{app.phone_number}</td>
                    <td className="p-2 border">{app.instagram_link}</td>
                    <td className="p-2 border">{app.business_message}</td>
                    <td className="p-2 border">{app.challange_message || "—"}</td>
                    <td className="p-2 border">{app.get_out_program_message}</td>
                    <td className="p-2 border">{app.mentorship_experience}</td>
                    <td className="p-2 border">{app.program_commitment}</td>
                    <td className="p-2 border">
                      {app.mentorShipResult?.map((m) => m.mentor_value).join(", ") || "—"}
                    </td>
                    <td className="p-2 border">{app.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                disabled={pagination.offset === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={pagination.offset + pagination.limit >= (pagination.total || 0)}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>

            </div>
          </div>
        </>
      )}
    </div>
  )
}