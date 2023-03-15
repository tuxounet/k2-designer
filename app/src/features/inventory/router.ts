import { t, router, publicProcedure, z, Context } from "../../context";

const inventoryRouter = router({
  getInventoryStats: publicProcedure.query(({ ctx }: { ctx: Context }) => {
    return {
      sources: Object.keys(ctx.inventory.sources.length),
      templates: Object.keys(ctx.inventory.templates.length),
    };
  }),
});

export default inventoryRouter;
