/*
  Warnings:

  - You are about to drop the column `mainLogInfo` on the `reqLog` table. All the data in the column will be lost.
  - Added the required column `action` to the `reqLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appName` to the `reqLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reqLog" DROP COLUMN "mainLogInfo",
ADD COLUMN     "action" TEXT NOT NULL,
ADD COLUMN     "appName" TEXT NOT NULL;
