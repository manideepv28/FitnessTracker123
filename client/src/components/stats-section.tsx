export function StatsSection() {
  const stats = [
    { value: "500+", label: "Workout Routines", color: "text-primary" },
    { value: "10K+", label: "Active Users", color: "text-secondary" },
    { value: "95%", label: "Goals Achieved", color: "text-orange-600" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
