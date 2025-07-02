-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);
