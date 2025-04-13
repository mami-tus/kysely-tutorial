-- CreateTable
CREATE TABLE "shohin_copy" (
    "shohin_id" CHAR(4) NOT NULL,
    "shohin_mei" VARCHAR(100) NOT NULL,
    "shohin_bunrui" VARCHAR(32) NOT NULL,
    "hanbai_tanka" INTEGER,
    "shiire_tanka" INTEGER,
    "torokubi" DATE,

    CONSTRAINT "shohin_copy_pkey" PRIMARY KEY ("shohin_id")
);
