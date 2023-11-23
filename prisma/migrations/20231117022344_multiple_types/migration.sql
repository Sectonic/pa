/*
  Warnings:

  - You are about to drop the column `typeDataId` on the `LinkCollection` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `LinkCollection_typeDataId_idx` ON `LinkCollection`;

-- AlterTable
ALTER TABLE `LinkCollection` DROP COLUMN `typeDataId`;

-- CreateTable
CREATE TABLE `_LinkCollectionToTypeData` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LinkCollectionToTypeData_AB_unique`(`A`, `B`),
    INDEX `_LinkCollectionToTypeData_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
