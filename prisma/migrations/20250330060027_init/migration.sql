/*
  Warnings:

  - Added the required column `yubin_bango` to the `Jyushoroku` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jyushoroku" ADD COLUMN     "yubin_bango" CHAR(8) NOT NULL;
