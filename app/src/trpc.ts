import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
 
import { createContext } from "./context";
import { appRouter } from "./router";
 

export function trpc(app: express.Application) {
  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
}
