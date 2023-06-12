-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NULL,
    `tag` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `mbti` VARCHAR(191) NULL,
    `extrovertIntrovert` VARCHAR(191) NULL,
    `temperment` VARCHAR(191) NULL,
    `quadra` VARCHAR(191) NULL,
    `sensoryModality` VARCHAR(191) NULL,
    `deModality` VARCHAR(191) NULL,
    `oD` VARCHAR(191) NULL,
    `energyInfo` VARCHAR(191) NULL,
    `function1` VARCHAR(191) NULL,
    `function2` VARCHAR(191) NULL,
    `deciderNeed` VARCHAR(191) NULL,
    `deciderLetter` VARCHAR(191) NULL,
    `observerLetter` VARCHAR(191) NULL,
    `animal1` VARCHAR(191) NULL,
    `animal2` VARCHAR(191) NULL,
    `animal3` VARCHAR(191) NULL,
    `animal4` VARCHAR(191) NULL,
    `playModality` VARCHAR(191) NULL,
    `sleepModality` VARCHAR(191) NULL,
    `blastModality` VARCHAR(191) NULL,
    `consumeModality` VARCHAR(191) NULL,
    `observerAxis` VARCHAR(191) NULL,
    `deciderAxis` VARCHAR(191) NULL,
    `social` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,
    `fileId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Link` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `personId` INTEGER NOT NULL,

    INDEX `Link_personId_idx`(`personId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NULL,
    `subscriptionId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
