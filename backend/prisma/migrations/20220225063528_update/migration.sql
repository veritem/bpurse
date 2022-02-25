/*
  Warnings:

  - You are about to drop the column `Status` on the `Budget` table. All the data in the column will be lost.
  - Added the required column `source` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "Status",
ADD COLUMN     "status" "BudgetStatus" NOT NULL DEFAULT E'PENDING',
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "source" TEXT NOT NULL;
