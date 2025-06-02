import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar } from "lucide-react";
import { nutritionPlansData } from "@/data/nutrition";

export function NutritionSection() {
  const getButtonColor = (goal: string) => {
    switch (goal) {
      case "weight-loss":
        return "bg-orange-600 hover:bg-orange-700";
      case "muscle-gain":
        return "bg-primary hover:bg-blue-700";
      case "endurance":
        return "bg-secondary hover:bg-green-700";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nutrition Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fuel your fitness journey with professionally designed meal plans tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionPlansData.map((plan) => (
            <Card key={plan.id} className="bg-slate-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Utensils className="mr-2 h-4 w-4" />
                    {plan.dailyCalories} calories/day
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {plan.duration} days
                  </span>
                </div>
                <Button 
                  className={`w-full text-white font-medium transition-colors ${getButtonColor(plan.goal)}`}
                >
                  View Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
