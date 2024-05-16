-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "retyped" BOOLEAN NOT NULL DEFAULT false,
    "sex" TEXT,
    "tag" TEXT NOT NULL,
    "image" TEXT,
    "fileId" TEXT,
    "typeDataId" INTEGER NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeData" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "mbti" TEXT,
    "extrovertIntrovert" TEXT,
    "temperment" TEXT,
    "quadra" TEXT,
    "sensoryModality" TEXT,
    "deModality" TEXT,
    "oD" TEXT,
    "energyInfo" TEXT,
    "function1" TEXT,
    "function2" TEXT,
    "deciderNeed" TEXT,
    "deciderLetter" TEXT,
    "observerLetter" TEXT,
    "observerNeed" TEXT,
    "animal1" TEXT,
    "animal2" TEXT,
    "animal3" TEXT,
    "animal4" TEXT,
    "playModality" TEXT,
    "sleepModality" TEXT,
    "blastModality" TEXT,
    "consumeModality" TEXT,
    "observerAxis" TEXT,
    "deciderAxis" TEXT,
    "social" TEXT,

    CONSTRAINT "TypeData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "linkId" TEXT,
    "channel" BOOLEAN NOT NULL DEFAULT false,
    "peopleIds" TEXT,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "pronouns" TEXT,
    "opsType" TEXT,
    "opsTyping" TEXT,
    "description" VARCHAR(400),
    "email" TEXT NOT NULL,
    "provider" TEXT,
    "customerId" TEXT,
    "subscriptionId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "priceId" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeData_type_social_key" ON "TypeData"("type", "social");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Price_amount_key" ON "Price"("amount");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkToType_AB_unique" ON "_LinkToType"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkToType_B_index" ON "_LinkToType"("B");

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_typeDataId_fkey" FOREIGN KEY ("typeDataId") REFERENCES "TypeData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToType" ADD CONSTRAINT "_LinkToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToType" ADD CONSTRAINT "_LinkToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
