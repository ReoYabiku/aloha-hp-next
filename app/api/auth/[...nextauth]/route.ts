import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      console.log(profile?.email);
      if (profile?.email == "aloha.edu23@gmail.com") {
        return true
      };
      return false
    },
  }
})

export { handler as GET, handler as POST }