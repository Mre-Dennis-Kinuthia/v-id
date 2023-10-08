-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Program" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "UserProfile_Email_key" ON "UserProfile"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "InstitutionProfile_institutionEmail_key" ON "InstitutionProfile"("institutionEmail");
