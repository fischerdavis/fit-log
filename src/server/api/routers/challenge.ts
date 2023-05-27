import { createTRPCRouter, protectedProcedure, publicProcedure, } from '@/server/api/trpc';

export const challengeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.challenge.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
