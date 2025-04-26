import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "@/lib";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user
    const result = await pool.query(
      "SELECT * FROM usertable WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "EAAAlgU4tbHTz3wdLfU8Dz5WkGdaMlgvQ7rUlqYBdHK713mG0HTgfoJWoEa9knQs",
      { expiresIn: "31d" }
    );

    // Don't return password
    delete user.password;

    return NextResponse.json({
      message: "Login successful",
      token,
      user
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
