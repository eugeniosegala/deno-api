import { Application, log } from "../../deps.ts";

const errorHandler = (app: Application) => {
  app.addEventListener("error", (event: { error: any; }) => {
    log.error(event.error);
  });

  app.use(async (ctx: any, next: any) => {
    try {
      await next();
    } catch (err) {
      ctx.response.body = "Internal server error";
      throw err;
    }
  });
};

export default errorHandler;
