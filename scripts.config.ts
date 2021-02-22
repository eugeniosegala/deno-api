import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";
import { config as env } from "./deps.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "src/server.ts",
      desc: "Run my mod.ts file",
      allow: ["env", "net", "read", "write"],
      lock: "lock.json",
      env: env(),
    },
  },
};

export default config;
