import { NutritionPlan } from "@shared/schema";

export const nutritionPlansData: NutritionPlan[] = [
  {
    id: 1,
    title: "Weight Loss Plan",
    description: "Balanced meal plan with controlled portions designed to create a healthy caloric deficit for sustainable weight loss.",
    goal: "weight-loss",
    dailyCalories: 1500,
    duration: 28,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    description: "High-protein meal plan optimized for muscle building and recovery, with proper macro balance for strength athletes.",
    goal: "muscle-gain",
    dailyCalories: 2200,
    duration: 30,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 3,
    title: "Endurance Plan",
    description: "Carb-focused nutrition plan designed to fuel long training sessions and optimize recovery for endurance athletes.",
    goal: "endurance",
    dailyCalories: 2000,
    duration: 21,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 4,
    title: "Balanced Wellness",
    description: "Comprehensive nutrition plan that balances all macronutrients for overall health and wellness maintenance.",
    goal: "weight-loss",
    dailyCalories: 1800,
    duration: 30,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];
