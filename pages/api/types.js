// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Types(req, res) {
  const filters = JSON.parse(JSON.stringify(req.body));
  const getTypes = await prisma.types.findMany(filters);
  res.json({ data: getTypes });
}
