import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const cobaRouter = createTRPCRouter({
    coba: publicProcedure
        .query(({ctx})=>{
            return ctx.session?.user
        })
    });