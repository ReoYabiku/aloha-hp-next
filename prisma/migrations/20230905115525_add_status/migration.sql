/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PRIVATE';

-- DropTable
DROP TABLE "users";
