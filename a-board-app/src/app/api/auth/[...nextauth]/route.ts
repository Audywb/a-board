import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
            },
            async authorize(credentials, req) {
                console.log(credentials, `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/signin`);

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/signin`, {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    });

                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }

                    const data = await res.json();

                    if (data.success) {
                        console.log('authorize', data.user);
                        return data.user;
                    }

                    return null;
                } catch (error) {
                    console.error('Error during authorization:', error);
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account && user && user != undefined) {
                token.accessToken = account.access_token
                token.user = user
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            console.log('Session', session, token)

            return session
        }
    },
    pages: {
        signIn: "/signin"
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };