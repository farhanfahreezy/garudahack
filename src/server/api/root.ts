import { authRouter } from './routers/auth';
import { courserRouter } from './routers/course';
import { userRouter } from './routers/user';
import { createTRPCRouter } from './trpc';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
 export const appRouter = createTRPCRouter({
    auth: authRouter,
    user: userRouter,
    course: courserRouter
  });
  
  // export type definition of API
  export type AppRouter = typeof appRouter;