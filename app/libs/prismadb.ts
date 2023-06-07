import { PrismaClient } from "@prisma/client";

//Import prisma and give it a global definition so it can work throughout code
declare global {
  var prisma: PrismaClient | undefined;
}
// Create client constant that searches for globalThis.prisma or creates a new one
const client = globalThis.prisma || new PrismaClient();
// Not in production? set globalThis.prisma to client

//Assign prisma client so reloads don't effect it
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
