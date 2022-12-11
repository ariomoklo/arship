import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import type { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {

  debug: true,

  session: {
    
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 7 * 24 * 60 * 60, // 7 days
  
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },

  // Include user.id on session
  callbacks: {
    async session({ session, token }) {
      const userid = token.sub ?? undefined
      if (typeof userid !== 'string') {
        const user: User | null = await prisma.user.findUnique({ where: { email: session.user?.email as string }})
        if (user) { 
          session.user = user 
          return session
        }
      } else {
        const user: User | null = await prisma.user.findUnique({ where: { id: userid }})
        if (user) {
          session.user = user
          return session
        }
      }

      return session
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "sigma-login",
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      type: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email sigma" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('ini di authorizenya: ', credentials)
        if (typeof credentials?.username === "string" && credentials?.password === "testing") {
          console.log("masuk ke user ario")
          const user: User | null = await prisma.user.findUnique({ where: { email: credentials.username }})
          if (!user) return null

          console.log("found user", user)
          return user
        } else {
          console.log("return null")
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
};

export default NextAuth(authOptions);
