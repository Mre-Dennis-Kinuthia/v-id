/*
  Warnings:

  - You are about to drop the column `Email` on the `UserProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[learnerEmail]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `learnerEmail` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `learnerPassword` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserProfile_Email_key";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "Email",
ADD COLUMN     "learnerEmail" TEXT NOT NULL,
ADD COLUMN     "learnerPassword" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_learnerEmail_key" ON "UserProfile"("learnerEmail");
