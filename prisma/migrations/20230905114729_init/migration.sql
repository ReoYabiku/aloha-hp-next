-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "embed_url" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "google_document_id" VARCHAR NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);
