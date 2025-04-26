import pool from "@/lib";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const insertQuery = `INSERT INTO userTable (name, email,phone_number,instagram_link,business_message,get_out_program_message,challange_message,mentorship_experience,program_commitment,message) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ,$9 ,$10) RETURNING *`;

  const insertMultiValuesQuery = `INSERT INTO mentorship(mentor_value,author_id) VALUES($1,$2)`;

  try {
    const data = await request.json();

    const {
      name,
      email,
      phone_number,
      instagram_link,
      business_message,
      get_out_program_message,
      challange_message,
      mentorship_experience,
      program_commitment,
      message,
      mentorShip,
    } = data;

    console.log("data==>",name,
      email,
      phone_number,
      instagram_link,
      business_message,
      get_out_program_message,
      challange_message,
      mentorship_experience,
      program_commitment,
      message,
      mentorShip,)

    if (!name) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await pool.query(insertQuery, [
      name,
      email,
      phone_number,
      instagram_link,
      business_message,
      get_out_program_message,
      challange_message,
      mentorship_experience,
      program_commitment,
      message,
    ]);
    // console.log("result.rows=>", result.rows[0].id);

    if (mentorShip && mentorShip.length > 0) {
      await Promise.all(
        mentorShip.map(async (item: string) => {
          await pool.query(insertMultiValuesQuery, [item, result.rows[0].id]);
        })
      );
    }

    return NextResponse.json({
      success: true,
      message: "Demo request processed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM userTable ORDER BY id DESC");
    // console.log("result.rows=>", result.rows);
    const mergeMetorShip = await Promise.all(
      result.rows.map(async (item: { id: string }) => {
        // console.log("item=>", item);
        const mentorShipResult = await pool.query(
          `SELECT * FROM mentorship WHERE author_id = $1`,
          [item.id]
        );
        return { ...item, mentorShipResult: mentorShipResult.rows };
      })
    );
    return NextResponse.json({
      success: true,
      data: mergeMetorShip,
    });
  } catch (error) {
    console.error("Error retrieving demo requests:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
