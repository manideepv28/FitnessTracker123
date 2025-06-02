import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigateToWorkouts: () => void;
}

export function HeroSection({ onNavigateToWorkouts }: HeroSectionProps) {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your{" "}
              <span className="text-orange-400">Fitness Journey</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover personalized workout routines and nutrition plans designed to help you achieve your fitness goals with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onNavigateToWorkouts}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                Start Working Out
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                View Nutrition Plans
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="People working out in gym"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
