import { z } from "zod";
import { apps } from "../../db/mock";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const appsRouter = router({
  
  all: protectedProcedure
    .input(z.object({
      page: z.number().nullish()
    }).nullish())
    .query(({ input }) => {
      if (typeof input !== 'number') return apps
      if (input <= 0) return apps
      return apps.slice((input * 10) - 10, (input * 10) - 1)
    }),

  get: protectedProcedure
    .input(z.string())
    .query(({ input }) => {
      const found = apps.find(app => app.code === input)
      if (!found) throw new Error(`App with code ${input} is not found`)
      return found
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
