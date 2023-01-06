import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "admin@dusted.my" || password !== "admin1234#") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "123",
          name: "Admin",
          email: "admin@dusted.my",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
