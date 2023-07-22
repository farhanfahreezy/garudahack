import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { generateHash } from "@/utils/auth";

export const authRouter = createTRPCRouter({
  resetPassword: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        newPassword: z.string().min(8),
        oldPassword: z.string().min(8),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
        select: {
          id: true,
           password: true,
        },
      });
      if (!profile) {
        return {
          success: false,
          message: "User not found",
        };
      }

      await ctx.prisma.user.update({
        where: {
            id: profile.id,
        },
        data: {
            password: await generateHash(input.newPassword)
        }
        })

        return "Password updated"
    }),
});
