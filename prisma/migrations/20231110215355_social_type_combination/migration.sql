/*
  Warnings:

  - A unique constraint covering the columns `[type,social]` on the table `TypeData` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `TypeData_type_key` ON `TypeData`;

-- CreateIndex
CREATE UNIQUE INDEX `TypeData_type_social_key` ON `TypeData`(`type`, `social`);
