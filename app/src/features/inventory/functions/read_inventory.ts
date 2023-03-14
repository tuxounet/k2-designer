import path from "path";
import fs from "fs";
import jsYaml from "js-yaml";
import { KInventory } from "../types/KInventory";
export default function read_inventory() {
  const inventoryFolder = path.resolve(
    process.env.K2_INVENTORY ?? process.cwd()
  );
  const inventoryFile = path.join(inventoryFolder, "k2.inventory.yaml");

  const inventoryContent = fs.readFileSync(inventoryFile, {
    encoding: "utf-8",
  });
  const inventory = jsYaml.load(inventoryContent) as KInventory;
  console.dir(inventory);

  return inventory;
}
