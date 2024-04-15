-- CreateTable
CREATE TABLE "SlottedPostCounter" (
    "slug" TEXT NOT NULL,
    "slot" INTEGER NOT NULL DEFAULT 0,
    "count" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "SlottedPostCounter_slug_slot_key" ON "SlottedPostCounter"("slug", "slot");
