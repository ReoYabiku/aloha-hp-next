import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      if (profile?.email == "aloha.edu23@gmail.com") {
        return true
      };
      return false
    },
    async redirect() {
      return "/admin/edit"
    }
  }
})

export { handler as GET, handler as POST }