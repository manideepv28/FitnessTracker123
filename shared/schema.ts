import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  goal: text("goal").notNull(), // weight-loss, muscle-gain, endurance
  difficulty: text("difficulty").notNull(), // beginner, intermediate, advanced
  duration: integer("duration").notNull(), // duration in minutes
  calories: integer("calories").notNull(),
  image: text("image").notNull(),
  exercises: text("exercises").array(), // array of exercise names
});

export const nutritionPlans = pgTable("nutrition_plans", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  goal: text("goal").notNull(), // weight-loss, muscle-gain, endurance
  dailyCalories: integer("daily_calories").notNull(),
  duration: integer("duration").notNull(), // duration in days
  image: text("image").notNull(),
});

export const insertWorkoutSchema = createInsertSchema(workouts).omit({
  id: true,
});

export const insertNutritionPlanSchema = createInsertSchema(nutritionPlans).omit({
  id: true,
});

export type InsertWorkout = z.infer<typeof insertWorkoutSchema>;
export type Workout = typeof workouts.$inferSelect;
export type InsertNutritionPlan = z.infer<typeof insertNutritionPlanSchema>;
export type NutritionPlan = typeof nutritionPlans.$inferSelect;
