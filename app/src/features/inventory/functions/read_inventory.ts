import path from "path";

import * as k2 from "@tuxounet-k2/cli";
export default async function read_inventory() {
  const inventoryFolder = path.resolve(
    process.env.K2_INVENTORY ?? process.cwd()
  );
  const inventoryFile = path.join(inventoryFolder, "k2.inventory.yaml");

  const inventory = await k2.inventory.getInventory(inventoryFile);

  return inventory;
}
