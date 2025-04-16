-- CreateTable
CREATE TABLE "shohin_saeki" (
    "shohin_id" CHAR(4) NOT NULL,
    "shohin_mei" VARCHAR(100) NOT NULL,
    "hanbai_tanka" INTEGER,
    "shiire_tanka" INTEGER,
    "saeki" INTEGER,

    CONSTRAINT "shohin_saeki_pkey" PRIMARY KEY ("shohin_id")
);
