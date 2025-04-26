"use server";

import { revalidatePath } from "next/cache";
// import { query } from "@/lib/db"

export async function submitDemoRequest(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const instagram_link = formData.get("instagram_link") as string;
    const business_message = formData.get("business_message") as string;
    const challange_message = formData.get("challange_message") as string;
    const get_out_program_message = formData.get("get_out_program_message") as string;
    const mentorship_experience = formData.get(
      "mentorship_experience"
    ) as string;
    const program_commitment = formData.get("program_commitment") as string;
    const mentorShip = formData.getAll("mentorShip") as string[];
    const message = (formData.get("message") as string) || "";

    console.log("Form Submitted ===>", {
      name,
      email,
      phone_number,
      instagram_link,
      business_message,
      challange_message,
      get_out_program_message,
      mentorship_experience,
      program_commitment,
      mentorShip,
      message,
    });

    if (!name || !email || !phone_number || !instagram_link) {
      return { success: false, message: "Please fill all required fields." };
    }

    // Save to DB (mocked)
    // const result = await query(
    //   `INSERT INTO demo_requests (name, email, phone, social, business, challenges, goals, mentorship_experience, program_commitment, mentorship_options, message, status)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id`,
    //   [name, email, phone, social, business, challenges, goals, mentorshipExperience, programCommitment, mentorshipOptions.join(", "), message, "new"]
    // )

    const submissionId = Math.floor(Math.random() * 10000); // for mock
    const data = {
      id: submissionId,
      name,
      email,
      phone_number,
      instagram_link,
      business_message,
      challange_message,
      get_out_program_message,
      mentorship_experience,
      program_commitment,
      mentorShip,
      message,
      submittedAt: new Date().toISOString(),
    };

    // Send to API (optional)
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/demo-request`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://market-landing-page-kt86.vercel.app/";
    console.log("baseUrl=>", baseUrl);
    const response = await fetch(`${baseUrl}/api/demo-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("response=>", response);

    if (!response.ok) {
      throw new Error("Failed to process demo request");
    }

    revalidatePath("/book-your-demo");

    return { success: true, message: "Demo request submitted successfully" };
  } catch (error) {
    console.error("Error in submitDemoRequest:", error);
    return {
      success: false,
      message: "An error occurred while submitting your request",
    };
  }
}
