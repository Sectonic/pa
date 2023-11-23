/*
  Warnings:

  - You are about to drop the column `linkCollectionId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the `LinkCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LinkCollectionToTypeData` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `tag` on table `Type` required. This step will fail if there are existing NULL values in that column.
  - Made the column `typeDataId` on table `Type` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Link_linkCollectionId_idx` ON `Link`;

-- DropIndex
DROP INDEX `Link_personId_idx` ON `Link`;

-- AlterTable
ALTER TABLE `Link` DROP COLUMN `linkCollectionId`,
    DROP COLUMN `personId`;

-- AlterTable
ALTER TABLE `Type` MODIFY `tag` VARCHAR(191) NOT NULL,
    MODIFY `typeDataId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `TypeData` ADD COLUMN `count` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `LinkCollection`;

-- DropTable
DROP TABLE `_LinkCollectionToTypeData`;

-- CreateTable
CREATE TABLE `_LinkToType` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LinkToType_AB_unique`(`A`, `B`),
    INDEX `_LinkToType_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
