/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Type` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
