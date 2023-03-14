import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import path from "path";
import { createContext } from "./context";
import { appRouter } from "./router";
async function main() {
  // express implementation
  const app = express();
  app.use(
    cors({
      methods: "GET",
    })
  );
  app.use((req, _res, next) => {
    // request logger
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.get(
    "/",
    express.static(path.resolve(process.cwd(), "ui"), {
      index: "index.html",
    })
  );

  app.listen(2021, () => {
    console.log("listening on port 2021");
  });
}

void main();
