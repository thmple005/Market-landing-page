"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface DemoRequest {
  id: number
  name: string
  company: string
  role: string
  email: string
  message: string
  status: string
  created_at: string
}

interface PaginationData {
  total: number
  limit: number
  // offset: number
}

export default function AdminDemoRequests() {
  const [submissions, setSubmissions] = useState<DemoRequest[]>([])
  // const [pagination, setPagination] = useState<PaginationData>({ total: 0, limit: 10, offset: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState("")
  const router = useRouter()

  const fetchSubmissions = async () => {
    if (!apiKey) return

    setLoading(true)
    setError(null)

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://market-landing-page-ysv9.vercel.app";

    try {
      const response = await fetch(`${baseUrl}/api/demo-request?page=1&limit=5`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()
      setSubmissions(result.data.submissions)
      // setPagination(result.data.pagination)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check for API key in localStorage
    const savedApiKey = localStorage.getItem("adminApiKey")
    if (savedApiKey) {
      setApiKey(savedApiKey)
    }
  }, [])

  // useEffect(() => {
  //   if (apiKey) {
  //     fetchSubmissions()
  //     // Save API key to localStorage
  //     localStorage.setItem("adminApiKey", apiKey)
  //   }
  // }, [apiKey, pagination.offset, pagination.limit])

  // const handlePrevPage = () => {
  //   if (pagination.offset - pagination.limit >= 0) {
  //     setPagination({
  //       ...pagination,
  //       offset: pagination.offset - pagination.limit,
  //     })
  //   }
  // }

  // const handleNextPage = () => {
  //   if (pagination.offset + pagination.limit < pagination.total) {
  //     setPagination({
  //       ...pagination,
  //       offset: pagination.offset + pagination.limit,
  //     })
  //   }
  // }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  if (!apiKey) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Admin: Demo Requests</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Authentication Required</h2>
          <div className="mb-4">
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              Admin API Key
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your API key"
            />
          </div>
          <button
            onClick={() => fetchSubmissions()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin: Demo Requests</h1>
        <button
          onClick={() => {
            localStorage.removeItem("adminApiKey")
            setApiKey("")
          }}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Logout
        </button>
      </div>

      {error && <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">{error}</div>}

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{submission.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{submission.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{submission.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{submission.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            submission.status === "new" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatDate(submission.created_at)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No submissions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-700">
              Showing {pagination.offset + 1} to {Math.min(pagination.offset + pagination.limit, pagination.total)} of{" "}
              {pagination.total} results
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={pagination.offset === 0}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={pagination.offset + pagination.limit >= pagination.total}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div> */}
        </>
      )}
    </div>
  )
}
