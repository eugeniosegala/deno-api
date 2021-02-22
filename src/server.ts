import { Application } from "../deps.ts";
import { loggerSetup, serverListener } from "./startup/index.ts";
import { errorHandler, responseTime } from "./middleware/index.ts";
import routes from "./routes.ts";

const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") || "80", 10);

await loggerSetup();

errorHandler(app);
responseTime(app);
routes(app);

if (import.meta.main) {
  serverListener(app, PORT);
}
