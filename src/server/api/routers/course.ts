import { z } from "zod";
import { prisma } from "@/server/db";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { truncate } from "fs/promises";

export const courserRouter = createTRPCRouter({
    getUserCourses: protectedProcedure
        .query(async ({ctx})=>{
            const person = await ctx.prisma.user.findFirst({
                where:{
                    email: ctx.session.user.email as string
                }
            })
            if(!person){
                return {
                    success: false,
                    message: "User not found",
                }
            }
            const courses = await ctx.prisma.courseOnUser.findMany({
                where:{
                    userId: person.id
                }
            })
            return courses
        })
    ,
    filteredCourses: protectedProcedure.query(async ({ ctx }) => {
        const person = await ctx.prisma.user.findFirst({
          where: {
            email: ctx.session.user.email as string,
          },
        });
        if (!person) {
          return {
            success: false,
            message: "User not found",
          };
        }
    
        const coursesUser = await ctx.prisma.courseOnUser.findMany({
          where: {
            userId: person.id,
          },
        });
    
        const courses = await ctx.prisma.course.findMany();
    
        const filteredCourses = courses.filter(
          (course) => !coursesUser.some((userCourse) => userCourse.courseId === course.id)
        );
    
        return filteredCourses;
      }),

    completedCourseUser: protectedProcedure.query(async ({ ctx }) => {
        const person = await ctx.prisma.user.findFirst({
          where: {
            email: ctx.session.user.email as string,
          },
        });
        if (!person) {
          return {
            success: false,
            message: "User not found",
          };
        }
    
        const completedCourse = await ctx.prisma.courseOnUser.findMany({
          where: {
            AND: {
                userId: person.id,
                status:true
              },
          },
        });
    
        return completedCourse;
      }),
});
