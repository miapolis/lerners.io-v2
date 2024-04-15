/**
 * From https://remix.run/docs/en/v1/tutorials/jokes#set-up-prisma
 */
import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});
const adapter = new PrismaLibSQL(libsql);

declare global {
  var __db: PrismaClient | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient({ adapter });
} else {
  if (!global.__db) {
    global.__db = new PrismaClient({ adapter });
  }
  db = global.__db;
}

export { db };
