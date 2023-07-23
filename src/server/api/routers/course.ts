import { z } from "zod";
import { prisma } from "@/server/db";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { truncate } from "fs/promises";
import { CourseResponse } from "@/utils/type";

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
            const returnedCourse : CourseResponse[] = []

            for (const course of courses) {
                const courseData = await ctx.prisma.course.findUnique({
                    where:{
                        id: course.courseId
                    },
                    include:{
                        _count:{
                            select:{
                                module:true
                            }
                        }
                    }
                })
                if(courseData){
                    returnedCourse.push(courseData)
                }
            }

            return returnedCourse
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
    
        const courses = await ctx.prisma.course.findMany({
            include:{
                _count:{
                    select:{
                        module:true
                    }
                }
            }
        });

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
          include:{
            _count:{
                select:{
                    module:true
                }
            }
        }
        });

        const returnedCourse : CourseResponse[] = []

            for (const course of completedCourse) {
                const courseData = await ctx.prisma.course.findUnique({
                    where:{
                        id: course.courseId
                    },
                    include:{
                        _count:{
                            select:{
                                module:true
                            }
                        }
                    }
                })
                if(courseData){
                    returnedCourse.push(courseData)
                }
            }
    
        return returnedCourse;
      }),

      getCourseDetail: protectedProcedure
      .input(z.object({
          courseId: z.number()
      }))
      .query(async ({ ctx, input }) => {
          const course = await ctx.prisma.course.findUnique({
              where:{
                  id: input.courseId
              },
              include:{
                  module: true,
                }
          })
          if(!course){
              return {
                  success: false,
                  message: "Course not found",
              }
          }
          return course
      }),
});
