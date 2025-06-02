import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";
import { Workout } from "@shared/schema";

interface WorkoutCardProps {
  workout: Workout;
  onClick: () => void;
}

export function WorkoutCard({ workout, onClick }: WorkoutCardProps) {
  const getGoalColor = (goal: string) => {
    switch (goal) {
      case "weight-loss":
        return "bg-orange-600 text-white";
      case "muscle-gain":
        return "bg-primary text-white";
      case "endurance":
        return "bg-secondary text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatGoal = (goal: string) => {
    return goal
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatDifficulty = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <Card 
      className="bg-white hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${getGoalColor(workout.goal)} text-xs font-medium`}>
            {formatGoal(workout.goal)}
          </Badge>
          <Badge className={`${getDifficultyColor(workout.difficulty)} text-xs font-medium`}>
            {formatDifficulty(workout.difficulty)}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {workout.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {workout.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{workout.duration} mins</span>
          </div>
          <div className="flex items-center">
            <Flame className="mr-2 h-4 w-4" />
            <span>{workout.calories} cal</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
