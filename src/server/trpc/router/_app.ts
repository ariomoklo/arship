import { router } from "../trpc";
import { authRouter } from "./auth";
import { appsRouter } from "./apps";

export const appRouter = router({
  apps: appsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
