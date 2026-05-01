CREATE TYPE "public"."product_category" AS ENUM('anana', 'legumineuses', 'tubercules', 'legumes', 'cereales', 'autres');--> statement-breakpoint
CREATE TYPE "public"."product_unit" AS ENUM('KG', 'G', 'PIECE', 'BOTTE');--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"price" numeric(10, 2) NOT NULL,
	"unit" "product_unit" NOT NULL,
	"category" "product_category" NOT NULL,
	"min_order_quantity" integer DEFAULT 1 NOT NULL,
	"max_order_quantity" integer DEFAULT 100 NOT NULL,
	"production_period_days" integer DEFAULT 7 NOT NULL,
	"image_url" text,
	"is_available" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
