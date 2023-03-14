import { publicProcedure, z } from "../context";

export default publicProcedure
  .input(z.string().nullish())
  .query(({ input, ctx }) => {
    return { greetings: `hello ${input ?? ctx.user?.name ?? "world"}` };
  });
