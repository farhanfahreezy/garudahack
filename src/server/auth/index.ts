import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Credentials } from "@/utils/type";
import { prisma } from "../db";
import type { GetServerSidePropsContext } from "next";
import { compareHash } from "@/utils/auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as Credentials;

        if (!email) {
          throw new Error("Email tidak boleh kosong");
        }

        if (!password) {
          throw new Error("Password tidak boleh kosong");
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          console.log("user tidak ditemukan");
          throw new Error("User tidak ditemukan");
        }

        const isPasswordValid = await compareHash(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Password salah");
        }
        console.log(user);

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: "secret", //process.env.NEXTAUTH_SECRET
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user && user.id) {
        token.uid = user.id as number; // Assign user's id to token

        // Get user's role
        const userData = await prisma.user.findUnique({
          where: {
            id: user.id as number,
          },
          select: {
            id: true,
            imageURL: true,
            name: true,
            email: true,
          },
        });

        if (userData) {
          token = {
            ...token,
            ...userData,
          };
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      // Get user's data
      const userData = await prisma.user.findUnique({
        where: {
          id: token.uid as number,
        },
        select: {
          id: true,
          imageURL: true,
          name: true,
          email: true,
        },
      });

      if (token?.uid && userData) {
        // Check if token exists and has uid property
        session.user = userData;
      }
      return session;
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
