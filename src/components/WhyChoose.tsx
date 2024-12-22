import { Users, TrendingUp, Clock } from "lucide-react";

export const WhyChoose = () => {
  const reasons = [
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Connect with industry professionals from top companies"
    },
    {
      icon: TrendingUp,
      title: "Personalized Growth",
      description: "Get customized guidance for your career journey"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Learn at your own pace with various session formats"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose InfyCo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};