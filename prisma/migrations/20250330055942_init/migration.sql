-- CreateTable
CREATE TABLE "Jyushoroku" (
    "toroku_bango" INTEGER NOT NULL,
    "nemae" VARCHAR(128) NOT NULL,
    "jyusho" VARCHAR(256) NOT NULL,
    "tel_no" CHAR(10),
    "mail_address" CHAR(20),

    CONSTRAINT "Jyushoroku_pkey" PRIMARY KEY ("toroku_bango")
);
