import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { generateHash } from "@/utils/auth";



export const userRouter = createTRPCRouter({
    userDataCollection : protectedProcedure
    .input(
        z.object({
            age : z.number(),
            phoneNumber : z.string(),
            highLvlEdu : z.string(),
            workExp : z.string(),
            prefIndustry : z.string(),
            techSkill : z.string(),
            softSkill : z.string(),
            carrierGoals : z.string(),
            limitationUser : z.string(),
            areasAdditional : z.string(),
            comPref : z.string(),
            spesificAcc : z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        const profile = await ctx.prisma.user.findUnique({
            where: {
                email : ctx.session.user.email as string,
            }, 
            select: {
                id : true,
            },
        });

        if (!profile) {
            return {
              success: false,
              message: "User not found",
            };
          }

        await ctx.prisma.dataUser.create({
            data: {
                age : input.age,
                phoneNumber : input.phoneNumber,
                levelEducation : input.phoneNumber,
                workExperience : input.workExp,
                preferedIndustry : input.prefIndustry,
                technicalSkills : input.techSkill,
                softSkills : input.softSkill,
                carrierGoals : input.carrierGoals,
                limitationDesc : input.limitationUser,
                partBody : input.areasAdditional,
                communicationPreferences : input.comPref,
                accomodationNeeded : input.spesificAcc,
                userId: profile.id,
            }
        })
        return "Data created"
      }),

      userRegister: publicProcedure
      .input(
        z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8),
            rePassword: z.string().min(8),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const profile = await ctx.prisma.user.findUnique({
            where: {
                email : input.email,
            }, 
            select: {
                id : true,
            },
        });

        if (profile) {
            return {
              success: false,
              message: "Email has been taken",
            };
          }
        
          if (input.password != input.rePassword) {
            return {
                success: false,
                message: "Password must be same"
            }
          }

        await ctx.prisma.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: await generateHash(input.password) ,
            }
        })
        return "User has created"  
    }),
});