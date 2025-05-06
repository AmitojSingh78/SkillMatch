import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

const protectedRoutes = [
	"/dashboard",
	"/profile",
	"/resumes",
	"/jobs",
	"/interviews",
	"/applications",
];
const authRoutes = ['/login', '/register'];
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});

	const url = request.nextUrl;
	const path = url.pathname;

	if (token && authRoutes.includes(path)) {
		return NextResponse.redirect(new URL('/', request.url));
	  }
	  

	if(!token && protectedRoutes.some((route) => path.startsWith(route))) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
	  '/login',
	  '/register',
	  '/dashboard/:path*',
	  '/profile/:path*',
	  '/resumes/:path*', 
	  '/jobs/:path*',
	  '/interviews/:path*',
	  '/applications/:path*',
	  '/'
	],
  };