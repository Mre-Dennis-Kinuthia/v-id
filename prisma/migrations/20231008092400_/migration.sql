/*
  Warnings:

  - The `Programs` column on the `InstitutionProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "InstitutionProfile" DROP COLUMN "Programs",
ADD COLUMN     "Programs" TEXT[];
