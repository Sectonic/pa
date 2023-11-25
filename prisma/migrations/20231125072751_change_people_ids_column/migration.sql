/*
  Warnings:

  - You are about to drop the column `peopleIds` on the `Link` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Link` RENAME COLUMN `peopleIds` TO `concatPeople`
