CREATE TABLE "fertilizers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"is_recommended" boolean DEFAULT false NOT NULL,
	"is_available" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "fertilizers_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "product_fertilizers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"fertilizer_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_fertilizers" ADD CONSTRAINT "product_fertilizers_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_fertilizers" ADD CONSTRAINT "product_fertilizers_fertilizer_id_fertilizers_id_fk" FOREIGN KEY ("fertilizer_id") REFERENCES "public"."fertilizers"("id") ON DELETE cascade ON UPDATE no action;