-- AlterTable
ALTER TABLE `Link` ADD COLUMN `linkCollectionId` INTEGER NULL,
    MODIFY `personId` INTEGER NULL;

-- CreateTable
CREATE TABLE `LinkCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeDataId` INTEGER NOT NULL,

    INDEX `LinkCollection_typeDataId_idx`(`typeDataId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Link_linkCollectionId_idx` ON `Link`(`linkCollectionId`);
