import express from "express";
import cors from "cors";
import { front } from "./front";
import { trpc } from "./trpc";
import fs from "fs";
import path from "path";
const port = process.env.PORT ?? "8080";
const inventoryFolder = path.resolve(process.env.K2_INVENTORY ?? process.cwd());
async function main() {
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

  trpc(app);
  front(app);

  app.listen(port, () => {
    console.log("listening on port " + port);
  });
}

void main();
