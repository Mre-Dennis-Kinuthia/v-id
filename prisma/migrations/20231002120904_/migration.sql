/*
  Warnings:

  - You are about to drop the column `ImageUrl` on the `UserProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "ImageUrl";

-- CreateTable
CREATE TABLE "InstitutionProfile" (
    "id" SERIAL NOT NULL,
    "institutionName" TEXT NOT NULL,
    "institutionEmail" TEXT NOT NULL,
    "Programs" TEXT NOT NULL,
    "Facilitator" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "DateOfRegistration" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InstitutionProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InstitutionProfile_institutionEmail_key" ON "InstitutionProfile"("institutionEmail");
