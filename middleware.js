import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});
	
    const url = request.nextUrl;

	if (token && (url.pathname === "/sign-in" || url.pathname === "/sign-up")) {
		url.pathname = "/";
		return NextResponse.redirect(new URL("/", request.url));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/sign-in", "/sign-up", "/"],
};
