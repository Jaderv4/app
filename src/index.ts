import { Elysia } from "elysia"

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/home", () => ({ msg: 'Server runing home' }))
  .listen(3000)


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
