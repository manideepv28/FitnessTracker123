import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  goalFilter: string;
  onGoalFilterChange: (value: string) => void;
  difficultyFilter: string;
  onDifficultyFilterChange: (value: string) => void;
}

export function FilterBar({
  searchTerm,
  onSearchChange,
  goalFilter,
  onGoalFilterChange,
  difficultyFilter,
  onDifficultyFilterChange,
}: FilterBarProps) {
  const goalOptions = [
    { value: "all", label: "All Goals" },
    { value: "weight-loss", label: "Weight Loss" },
    { value: "muscle-gain", label: "Muscle Gain" },
    { value: "endurance", label: "Endurance" },
  ];

  const difficultyOptions = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  return (
    <div className="mb-8 bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-medium text-gray-700">Filter by Goal:</span>
          {goalOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => onGoalFilterChange(option.value)}
              variant={goalFilter === option.value ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-sm font-medium transition-colors ${
                goalFilter === option.value
                  ? "bg-primary text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-medium text-gray-700">Difficulty:</span>
          {difficultyOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => onDifficultyFilterChange(option.value)}
              variant={difficultyFilter === option.value ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-sm font-medium transition-colors ${
                difficultyFilter === option.value
                  ? "bg-secondary text-white hover:bg-green-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search workouts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
