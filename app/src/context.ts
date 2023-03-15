import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import * as zod from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getInventory = () => {
    const inventory = (req as any)["inventory"];
    if (!inventory) {
      throw new TRPCError({ code: "PARSE_ERROR" });
    }
    return inventory;
  };
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
    inventory: getInventory(),
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const z = zod.z;
