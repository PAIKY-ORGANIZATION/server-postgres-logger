/*
  Warnings:

  - You are about to drop the column `country` on the `reqLog` table. All the data in the column will be lost.
  - You are about to drop the column `ip` on the `reqLog` table. All the data in the column will be lost.
  - Added the required column `userId` to the `reqLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reqLog" DROP COLUMN "country",
DROP COLUMN "ip",
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "ip" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "contact" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ip_key" ON "User"("ip");

-- AddForeignKey
ALTER TABLE "reqLog" ADD CONSTRAINT "reqLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
