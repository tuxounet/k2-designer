import express from "express";
import cors from "cors";
import { front } from "./front";
import { trpc } from "./trpc";

const port = process.env.PORT ?? "8080";
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

  await trpc(app);
  front(app);

  app.listen(port, () => {
    console.log("listening on port " + port);
  });
}

void main();
