-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pricePerTon" INTEGER NOT NULL,
    "volumeInTon" INTEGER NOT NULL,
    "distributionWeight" DOUBLE PRECISION NOT NULL,
    "supplierName" TEXT NOT NULL,
    "earliestDelivery" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
