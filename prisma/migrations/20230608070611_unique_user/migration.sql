-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_personId_fkey";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
