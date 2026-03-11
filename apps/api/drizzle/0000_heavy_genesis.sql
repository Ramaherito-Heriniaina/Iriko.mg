CREATE TYPE "public"."user_role" AS ENUM('CLIENT', 'ADMIN');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255),
	"name" varchar(255),
	"phone" varchar(20),
	"role" "user_role" DEFAULT 'CLIENT' NOT NULL,
	"is_acitve" boolean DEFAULT true NOT NULL,
	"last_login" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
