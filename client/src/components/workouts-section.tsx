import { useState, useMemo } from "react";
import { WorkoutCard } from "./workout-card";
import { FilterBar } from "./filter-bar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { workoutsData } from "@/data/workouts";
import { Workout } from "@shared/schema";

export function WorkoutsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [goalFilter, setGoalFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const filteredWorkouts = useMemo(() => {
    return workoutsData.filter((workout) => {
      const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           workout.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGoal = goalFilter === "all" || workout.goal === goalFilter;
      const matchesDifficulty = difficultyFilter === "all" || workout.difficulty === difficultyFilter;
      
      return matchesSearch && matchesGoal && matchesDifficulty;
    });
  }, [searchTerm, goalFilter, difficultyFilter]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Workout Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our extensive library of workout routines designed by certified trainers for all fitness levels.
          </p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          goalFilter={goalFilter}
          onGoalFilterChange={setGoalFilter}
          difficultyFilter={difficultyFilter}
          onDifficultyFilterChange={setDifficultyFilter}
        />

        {filteredWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onClick={() => setSelectedWorkout(workout)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto text-gray-400 text-4xl mb-4 h-16 w-16" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No workouts found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Workout Detail Modal */}
        <Dialog open={!!selectedWorkout} onOpenChange={() => setSelectedWorkout(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedWorkout?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedWorkout && (
              <div className="space-y-4">
                <img
                  src={selectedWorkout.image}
                  alt={selectedWorkout.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-600">{selectedWorkout.description}</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Exercise List:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedWorkout.exercises?.map((exercise, index) => (
                      <li key={index}>• {exercise}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 py-2">
                  <span>Duration: {selectedWorkout.duration} minutes</span>
                  <span>Calories: {selectedWorkout.calories}</span>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-blue-700" size="lg">
                  Start Workout
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
