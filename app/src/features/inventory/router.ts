import { t, router, publicProcedure, z } from "../../context";

import EventEmitter from "events";
import read_inventory from "./functions/read_inventory";

const ee = new EventEmitter();
let id = 0;
const inventory = {
  posts: [
    {
      id: ++id,
      title: "hello",
    },
  ],
  messages: [createMessage("initial message")],
};
function createMessage(text: string) {
  const msg = {
    id: ++id,
    text,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  ee.emit("newMessage", msg);
  return msg;
}

const inventoryRouter = router({
  getInventory: t.procedure.mutation(() => {
    const inventory = read_inventory();
    return inventory;
  }),
  listPosts: publicProcedure.query(() => [inventory.posts]),
  createPost: t.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      const post = {
        id: ++id,
        ...input,
      };
      inventory.posts.push(post);
      return post;
    }),
});

export default inventoryRouter;
