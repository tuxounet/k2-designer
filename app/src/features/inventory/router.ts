import { t, router, publicProcedure, z, Context } from "../../context";
import * as k2 from "@tuxounet-k2/cli";
const inventoryRouter = router({
  getInventory: publicProcedure.query(({ ctx }: { ctx: Context }) => {
    const inventory = (ctx.req as any)["inventory"] as k2.inventory.Inventory;
    console.dir(inventory);
    return {
      sources: inventory.sources.size,
      templates: inventory.templates.size,
    };
  }),

  asMap: publicProcedure.query(({ ctx }: { ctx: Context }) => {
    const inventory = (ctx.req as any)["inventory"] as k2.inventory.Inventory;

    const nodes = Array.from(inventory.sources.values()).map((item) => {
      return {
        id: item.k2.metadata.id,
        type: item.k2.metadata.kind,
        data: item.k2.body as Record<string, unknown>,
      };
    });
 

    console.dir(inventory);
    return {
      nodes,
      links: [],
    };
  }),
});

export default inventoryRouter;
