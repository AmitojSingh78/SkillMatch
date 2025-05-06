import prisma from "@/utils/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { email, password } = credentials;
				const user = await prisma.users.findUnique({
					where: { email },
				});
				if (!user) {
					throw new Error("User not found");
				}
				const isPasswordValid = await bcrypt.compare(
					password,
					user.password
				);
                
				if (!isPasswordValid) {
					throw new Error("Invalid password");
				}
                console.log(user);

				return user;
			},
		}),
	],
    secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id;
			return session;
		},
	},
};
