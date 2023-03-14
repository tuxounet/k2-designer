import {  inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as zod from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== "secret") {
      return null;
    }
    return {
      name: "krux",
    };
  };

  return {
    req,
    res,
    user: getUser(),
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
export const z = zod.z;
