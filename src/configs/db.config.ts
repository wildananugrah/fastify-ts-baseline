import dotenv from "dotenv";

dotenv.config();

export const dbhost: string | undefined = process.env.DB_HOST;
export const dbDatabase: string | undefined = process.env.DB_DATABASE;
export const dbPort: string | undefined = process.env.DB_PORT;
export const dbUser: string | undefined = process.env.DB_USER;
export const dbPass: string | undefined = process.env.DB_PASS;
export const dbPoolMin: string | undefined = process.env.DB_POOL_MIN;
export const dbPoolMax: string | undefined = process.env.DB_POOL_MAX;
export const dbIdleTimeout: string | undefined = process.env.DB_IDLE_TIMEOUT;
export const dbConnectionTimeout: string | undefined =
  process.env.DB_CONNECTION_TIMEOUT;
export const dbMaxUses: string | undefined = process.env.DB_MAX_USES;
