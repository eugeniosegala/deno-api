import { Application, log } from "../../deps.ts";

export const serverListener = async (app: Application, port: number) => {
  log.info(`🚀 Oak: App listening on port ${port}`);
  await app.listen({
    port: port,
  });
};
