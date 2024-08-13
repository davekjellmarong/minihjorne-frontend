import { loginUser } from "@/queryFactory/Utils";
import { CommonUser } from "@/utils/types";
import { loginSchema } from "@/zod/Zod";
import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    jwt: string;
    user: CommonUser & DefaultSession["user"];
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        identifier: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;
          console.log("inside authorize");
          loginSchema.parseAsync(credentials);

          user = await loginUser(credentials);
          console.log("logging user next");
          console.log(user);
          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }
          // redirect("/min-side/selge/leie");
          console.log("user found and authorized, we are returingn now");
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       // User is available during sign-in
  //       token.id = user.user.id;
  //       token.username = user.user.username;
  //       token.admin = user.user.admin;
  //       token.jwt = user.jwt;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     session.user.id = token.id;
  //     session.user.username = token.username;
  //     session.user.admin = token.admin;
  //     session.jwt = token.jwt;

  //     return session;
  //   },
  // },
});
