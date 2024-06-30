import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
      },
      async authorize(credentials, req) {
        console.log(
          credentials,
          `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}//user/create`
        );

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/user/create`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const data = await res.json();

          if (data.message && data.message == "Success") {
            console.log("authorize", data);
            return data.data;
          }

          return null;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
    //   console.log("user:", user, "account:", account);
      if (account && user) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
    //   console.log("session:", session);
      // Ensure the session.user is populated with user information
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
