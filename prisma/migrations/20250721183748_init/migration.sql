-- CreateTable
CREATE TABLE "reqLog" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "mainLogInfo" TEXT NOT NULL,
    "additionalLogInfo" TEXT,

    CONSTRAINT "reqLog_pkey" PRIMARY KEY ("id")
);
