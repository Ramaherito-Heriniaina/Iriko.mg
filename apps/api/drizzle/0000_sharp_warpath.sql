CREATE TYPE "public"."user_role" AS ENUM('CLIENT', 'ADMIN');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255),
	"name" varchar(255),
	"phone" varchar(20),
	"role" "user_role" DEFAULT 'CLIENT' NOT NULL,
	"isActive" boolean,
	"lastLogin" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
