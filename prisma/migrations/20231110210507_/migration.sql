/*
  Warnings:

  - You are about to drop the column `personId` on the `TypeData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `TypeData` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `TypeData_personId_idx` ON `TypeData`;

-- DropIndex
DROP INDEX `TypeData_personId_key` ON `TypeData`;

-- AlterTable
ALTER TABLE `Type` ADD COLUMN `typeDataId` INTEGER NULL;

-- AlterTable
ALTER TABLE `TypeData` DROP COLUMN `personId`;

-- CreateIndex
CREATE INDEX `Type_typeDataId_idx` ON `Type`(`typeDataId`);

-- CreateIndex
CREATE UNIQUE INDEX `TypeData_type_key` ON `TypeData`(`type`);
