CREATE TABLE "cities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"region" varchar(255) NOT NULL,
	"additional_cost" numeric(10, 2) DEFAULT '0' NOT NULL,
	"estimated_delivery_days" integer DEFAULT 1 NOT NULL,
	"is_available" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "cities_name_unique" UNIQUE("name")
);
