import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const API_URL = process.env.NEXTAUTH_URL;


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(`${API_URL}/api/backend/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          },
        {
            headers: {
        "Content-Type": "application/json"
      }
        }
        );
          

          if (response.data && response.data.user) {
            return {
              id: response.data.user.id,
              email: response.data.user.email,
              name: response.data.user.name,
              token: response.data.token,
            };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }:{ session: any; token: any }) {
      session.user.id = token.id;
      session.user.token = token.token;
      return session;
    },
  },
};



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
