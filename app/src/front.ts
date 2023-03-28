import express from "express";
import path from "path";
export function front(app: express.Application) {
  const wwwRoot = process.env.WWW ?? path.join(process.cwd(), "ui");

  console.info("www", wwwRoot);
  // serve static assets normally
  app.use(express.static(wwwRoot));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(wwwRoot, "index.html"));
  });
}
