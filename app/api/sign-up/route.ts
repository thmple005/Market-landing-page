import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await pool.query(
      "SELECT * FROM usertable WHERE role=$1",
      ["admin"]
    );
    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "Already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await pool.query(
      "INSERT INTO usertable (name,  password,role) VALUES ($1,$2,$3) RETURNING id, name, email,role",
      [name, hashedPassword, "admin"]
    );

    const user = result.rows[0];

    // Generate JWT
    // const token = jwt.sign(
    //   { id: user.id, email: user.email },
    //   process.env.JWT_SECRET!,
    //   { expiresIn: "7d" }
    // );

    return NextResponse.json({
      message: "Signup successful",
      user
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
