import { router } from "./context";
import helloRouter from "./features/hello";
import inventoryRouter from "./features/inventory/router";
import templatesRouter from "./features/templates";
export const appRouter = router({
  hello: helloRouter,
  inventory: inventoryRouter,
  templates: templatesRouter,
});

export type AppRouter = typeof appRouter;
