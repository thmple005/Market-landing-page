// import { type NextRequest, NextResponse } from "next/server"
// // import { query } from "@/lib/db"

// export async function GET(request: NextRequest) {
//   try {
//     // Check for authentication
//     const authHeader = request.headers.get("authorization")
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
//     }

//     // In a real app, validate the token properly
//     const token = authHeader.split(" ")[1]
//     if (token !== process.env.ADMIN_API_KEY) {
//       return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
//     }

//     // Get query parameters
//     const url = new URL(request.url)
//     const limit = Number.parseInt(url.searchParams.get("limit") || "10")
//     const offset = Number.parseInt(url.searchParams.get("offset") || "0")

//     // Query the database
//     const applications = await query(
//       `SELECT * FROM mentorship_applications ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
//       [limit, offset],
//     )

//     // Get total count
//     const countResult = await query(`SELECT COUNT(*) as total FROM mentorship_applications`)
//     const total = Number.parseInt(countResult[0]?.total || "0")

//     return NextResponse.json({
//       success: true,
//       data: {
//         applications,
//         pagination: {
//           total,
//           limit,
//           offset,
//         },
//       },
//     })
//   } catch (error) {
//     console.error("Error retrieving applications:", error)
//     return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
//   }
// }
