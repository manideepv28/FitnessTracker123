import { Workout } from "@shared/schema";

export const workoutsData: Workout[] = [
  {
    id: 1,
    title: "HIIT Cardio Blast",
    description: "High-intensity interval training focused on burning calories and improving cardiovascular health. Perfect for beginners looking to lose weight.",
    goal: "weight-loss",
    difficulty: "beginner",
    duration: 30,
    calories: 320,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Jumping Jacks", "Burpees", "Mountain Climbers", "High Knees", "Squat Jumps"]
  },
  {
    id: 2,
    title: "Upper Body Strength",
    description: "Build powerful upper body muscles with targeted strength training exercises including push-ups, pull-ups, and resistance work.",
    goal: "muscle-gain",
    difficulty: "intermediate",
    duration: 45,
    calories: 280,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Push-ups", "Pull-ups", "Dumbbell Press", "Shoulder Raises", "Tricep Dips"]
  },
  {
    id: 3,
    title: "Marathon Training",
    description: "Advanced endurance training program designed to prepare you for long-distance running and improve cardiovascular endurance.",
    goal: "endurance",
    difficulty: "advanced",
    duration: 90,
    calories: 650,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Long Distance Run", "Tempo Runs", "Interval Training", "Hill Repeats", "Recovery Jog"]
  },
  {
    id: 4,
    title: "Full Body Circuit",
    description: "Comprehensive circuit training that targets all major muscle groups while maintaining high calorie burn for effective weight loss.",
    goal: "weight-loss",
    difficulty: "intermediate",
    duration: 40,
    calories: 380,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Squats", "Push-ups", "Lunges", "Plank", "Russian Twists", "Kettlebell Swings"]
  },
  {
    id: 5,
    title: "Powerlifting Basics",
    description: "Master the fundamental powerlifting movements: squat, bench press, and deadlift. Build serious strength and muscle mass.",
    goal: "muscle-gain",
    difficulty: "advanced",
    duration: 60,
    calories: 350,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Deadlifts", "Squats", "Bench Press", "Overhead Press", "Barbell Rows"]
  },
  {
    id: 6,
    title: "Yoga Flow",
    description: "Gentle flowing yoga sequences that improve flexibility, balance, and mental endurance while building a strong foundation.",
    goal: "endurance",
    difficulty: "beginner",
    duration: 50,
    calories: 180,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Sun Salutation", "Warrior Poses", "Tree Pose", "Downward Dog", "Child's Pose"]
  },
  {
    id: 7,
    title: "Core Crusher",
    description: "Intensive core workout designed to strengthen your midsection and improve overall stability and posture.",
    goal: "muscle-gain",
    difficulty: "intermediate",
    duration: 25,
    calories: 200,
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Plank Variations", "Russian Twists", "Bicycle Crunches", "Dead Bug", "Mountain Climbers"]
  },
  {
    id: 8,
    title: "Swimming Workout",
    description: "Low-impact full-body endurance workout that builds cardiovascular fitness while being gentle on joints.",
    goal: "endurance",
    difficulty: "intermediate",
    duration: 60,
    calories: 400,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    exercises: ["Freestyle", "Backstroke", "Breaststroke", "Butterfly", "Treading Water"]
  }
];
