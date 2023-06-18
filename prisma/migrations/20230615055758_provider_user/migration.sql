-- AlterTable
ALTER TABLE `User` ADD COLUMN `provider` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;
