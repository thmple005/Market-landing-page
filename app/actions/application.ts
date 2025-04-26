// "use server"

// import { revalidatePath } from "next/cache"
// import { query } from "@/lib/db"

// export async function submitApplication(formData: FormData) {
//   try {
//     // Extract form data
//     const fullName = formData.get("full_name") as string
//     const email = formData.get("email") as string
//     const phone = (formData.get("phone") as string) || null
//     const socialHandle = formData.get("social_handle") as string
//     const businessDescription = formData.get("business_description") as string
//     const challenges = formData.get("challenges") as string
//     const expectations = formData.get("expectations") as string
//     const previousMentorship = formData.get("previous_mentorship") as string
//     const programCommitment = formData.get("program_commitment") as string
//     const privateMentorship = (formData.get("private_mentorship") as string) || ""
//     const additionalNotes = (formData.get("additional_notes") as string) || ""

//     // Validate required fields
//     if (
//       !fullName ||
//       !email ||
//       !socialHandle ||
//       !businessDescription ||
//       !challenges ||
//       !expectations ||
//       !previousMentorship ||
//       !programCommitment
//     ) {
//       return { success: false, message: "All required fields must be filled out" }
//     }

//     // Store in database
//     const result = await query(
//       `INSERT INTO mentorship_applications 
//        (full_name, email, phone, social_handle, business_description, challenges, expectations, 
//         previous_mentorship, program_commitment, private_mentorship, additional_notes, status) 
//        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
//        RETURNING id`,
//       [
//         fullName,
//         email,
//         phone,
//         socialHandle,
//         businessDescription,
//         challenges,
//         expectations,
//         previousMentorship,
//         programCommitment,
//         privateMentorship,
//         additionalNotes,
//         "new",
//       ],
//     )

//     const applicationId = result[0]?.id

//     // Send notification email (would be implemented here)
//     // ...

//     // Revalidate the page to show updated content
//     revalidatePath("/apply")

//     return {
//       success: true,
//       message: "Application submitted successfully",
//       id: applicationId,
//     }
//   } catch (error) {
//     console.error("Error in submitApplication:", error)
//     return { success: false, message: "An error occurred while submitting your application" }
//   }
// }
