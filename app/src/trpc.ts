import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import * as k2 from "@tuxounet-k2/cli/dist/index";
import { createContext } from "./context";
import { appRouter } from "./router";
import path from "path";
import fs from "fs";
export async function trpc(app: express.Application) {
  const inventoryFolder = path.resolve(
    process.env.K2_INVENTORY ?? process.cwd()
  );
  //check for inventory
  if (!fs.existsSync(inventoryFolder)) {
    console.error("🛑 inventory folder not found at " + inventoryFolder);
    process.exit(1);
    return;
  }

  const inventoryFile = path.join(inventoryFolder, "k2.inventory.yaml");
  if (!fs.existsSync(inventoryFile)) {
    console.error("🛑 inventory file not found at " + inventoryFile);
    process.exit(1);
    return;
  }
  const inventory = await k2.inventory.getInventory(inventoryFile);
  //inventory middlewre
  app.use((req, _res, next) => {
    (req as any)["inventory"] = inventory;
    next();
  });
  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
}
