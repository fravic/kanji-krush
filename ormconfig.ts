import { ConnectionOptions } from "typeorm";

/* tslint:disable:object-literal-sort-keys */
export default {
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: false,
  entities: ["be/entities/**/*.ts"],
  migrations: ["be/migrations/**/*.ts"],
  subscribers: ["be/subscribers/**/*.ts"]
} as ConnectionOptions;
