import { PrismaClient } from '@prisma/client';

let db;

if (process.env.NEXT_PUBLIC_API !== 'http://127.0.0.1:5000') {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma
}

export default db