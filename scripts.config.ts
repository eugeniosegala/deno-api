import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";
import { config as env } from "./deps.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "src/server.ts",
      desc: "Run my mod.ts file",
      allow: {
        "env": "PORT",
        "net": "api.spacexdata.com,0.0.0.0:8000",
        "read": "data/kepler_exoplanets_nasa.csv"
      },
      lock: "lock.json",
      env: env(),
    },
  },
};

export default config;
