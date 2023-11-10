/*
  Warnings:

  - You are about to drop the column `animal1` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `animal2` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `animal3` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `animal4` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `blastModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `consumeModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `deModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `deciderAxis` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `deciderLetter` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `deciderNeed` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `energyInfo` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `extrovertIntrovert` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `function1` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `function2` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `mbti` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `oD` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `observerAxis` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `observerLetter` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `observerNeed` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `playModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `quadra` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `sensoryModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `sleepModality` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `social` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `temperment` on the `Type` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Type` DROP COLUMN `animal1`,
    DROP COLUMN `animal2`,
    DROP COLUMN `animal3`,
    DROP COLUMN `animal4`,
    DROP COLUMN `blastModality`,
    DROP COLUMN `consumeModality`,
    DROP COLUMN `deModality`,
    DROP COLUMN `deciderAxis`,
    DROP COLUMN `deciderLetter`,
    DROP COLUMN `deciderNeed`,
    DROP COLUMN `energyInfo`,
    DROP COLUMN `extrovertIntrovert`,
    DROP COLUMN `function1`,
    DROP COLUMN `function2`,
    DROP COLUMN `mbti`,
    DROP COLUMN `oD`,
    DROP COLUMN `observerAxis`,
    DROP COLUMN `observerLetter`,
    DROP COLUMN `observerNeed`,
    DROP COLUMN `playModality`,
    DROP COLUMN `quadra`,
    DROP COLUMN `sensoryModality`,
    DROP COLUMN `sleepModality`,
    DROP COLUMN `social`,
    DROP COLUMN `temperment`,
    DROP COLUMN `type`;
