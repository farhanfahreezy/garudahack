import { prisma } from '../db'
import { type Session } from "next-auth";
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import * as trpc from '@trpc/server';
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth';



type CreateContextOptions = {
    session: Session | null;
  };
  
  /**
   * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
   * it from here.
   *
   * Examples of things you may need it for:
   * - testing, so we don't have to mock Next.js' req/res
   * - tRPC's `createSSGHelpers`, where we don't have req/res
   *
   * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
   */
  const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
      session: opts.session,
      prisma,
    };
  };
  
  export type Context = trpc.inferAsyncReturnType<typeof createInnerTRPCContext>;

  /**
   * This is the actual context you will use in your router. It will be used to process every request
   * that goes through your tRPC endpoint.
   *
   * @see https://trpc.io/docs/context
   */
  export const createTRPCContext = async (opts: FetchCreateContextFnOptions): Promise<Context> => {  
    // Get the session from the server using the getServerSession wrapper function
    const session = await getServerSession(authOptions)
  
    return createInnerTRPCContext({
      session,
    });
  };