"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3002/"

  const handleLogin = async () => {
    setAuthLoading(true)
    setError(null)

    try {
      const response = await fetch(`${baseUrl}api/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) throw new Error("Invalid email or password")

      const data = await response.json()
      if (data.token) {
        localStorage.setItem("adminApiKey", data.token)
        router.push("/admin/list-detail")
      } else {
        throw new Error("No API key returned")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setAuthLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="••••••••"
          />
        </div>

        {error && <div className="text-red-600 mb-2">{error}</div>}

        <button
          onClick={handleLogin}
          disabled={authLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {authLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  )
}
