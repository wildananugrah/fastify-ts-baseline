import fastify from "fastify";
import { join } from "path";
import { appEnv, appHost, appPort } from "./configs/common.config";
const app = fastify({ logger: appEnv === "development" ? true : false });

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = import.meta.dirname;

// register cors plugin
import cors from "@fastify/cors";
app.register(cors);
// TODO list url & method yg di allow

// autoload all custom plugins
import autoLoad from "@fastify/autoload";
app.register(autoLoad, {
  dir: join(__dirname, "plugins"),
});

// autoload all routes
app.register(autoLoad, {
  dir: join(__dirname, "routes"),
});

app.listen({ host: appHost, port: appPort }, (err, _) => {
  if (err) {
    console.error(err);
  }
});
