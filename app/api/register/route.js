import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/utils/prisma";
import { successResponse, errorResponse } from "@/utils/response";

export async function POST(request) {
	try {
		const { firstName, lastName, email, password, confirmPassword } =
			await request.json();
		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!confirmPassword
		) {
			return NextResponse.json(
				errorResponse("All fields are required", 400)
			);
		}
		if (password !== confirmPassword) {
			return NextResponse.json(
				errorResponse("Passwords do not match", 400)
			);
		}
		if (password.length < 6) {
			return NextResponse.json(
				errorResponse("Password must be at least 6 characters", 400)
			);
		}
		if (password.length > 20) {
			return NextResponse.json(
				errorResponse("Password must be at most 20 characters", 400)
			);
		}
		if (email.includes("@")) {
			return NextResponse.json(
				errorResponse("Email must not contain @", 400)
			);
		}

		const existingUser = await prisma.users.findUnique({
			where: { email },
		});
		if (existingUser) {
			return NextResponse.json(errorResponse("User already exists", 400));
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await prisma.users.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashedPassword,
			},
		});
		if (!newUser) {
			return NextResponse.json(
				errorResponse("User creation failed", 500)
			);
		}
		return NextResponse.json(
			successResponse(newUser, "User created successfully")
		);
	} catch (error) {
		console.error("Error in registerUser:", error);
		return NextResponse.json(errorResponse("Internal server error", 500));
	}
}
