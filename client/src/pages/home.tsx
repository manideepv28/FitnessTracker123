import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { WorkoutsSection } from "@/components/workouts-section";
import { NutritionSection } from "@/components/nutrition-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`${sectionId}-section`);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  const handleNavigateToWorkouts = () => {
    scrollToSection("workouts");
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "workouts", "nutrition"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main className="pt-16">
        <div id="home-section">
          <HeroSection onNavigateToWorkouts={handleNavigateToWorkouts} />
        </div>
        
        <StatsSection />
        
        <div id="workouts-section">
          <WorkoutsSection />
        </div>
        
        <div id="nutrition-section">
          <NutritionSection />
        </div>
        
        {/* CTA Section */}
        <section className="gradient-secondary text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of users who have transformed their lives with FitTrack. Get started today with our personalized fitness and nutrition plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary px-8 py-3 font-semibold text-lg hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
