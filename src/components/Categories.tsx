import { Code, Database, Briefcase, Palette, Rocket, GraduationCap, BookOpen, LineChart } from "lucide-react";

export const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: "Engineering",
      description: "Software Development & Architecture",
      tags: ["Frontend Development", "Backend Development", "Full Stack Development", "+3 more"]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analytics & Machine Learning",
      tags: ["Data Engineer", "Data Scientist", "Data Analyst", "+2 more"]
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Strategy & Management",
      tags: ["Marketing", "Sales", "Business Analyst", "+2 more"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "UX/UI & Product Design",
      tags: ["Product Manager", "UI/UX Designer", "Project Manager", "+3 more"]
    },
    {
      icon: Rocket,
      title: "Startup",
      description: "Entrepreneurship & Innovation",
      tags: ["CEO", "CTO", "CPO", "+7 more"]
    },
    {
      icon: GraduationCap,
      title: "Career Coach",
      description: "Professional Development",
      tags: ["Leadership Coach", "Career Growth", "Interview Coach", "+1 more"]
    },
    {
      icon: BookOpen,
      title: "UPSC",
      description: "Civil Services Preparation",
      tags: ["UPSC Aspirants", "UPSC Coaches"]
    },
    {
      icon: LineChart,
      title: "Finance",
      description: "Investment & Trading",
      tags: ["Mutual Funds Expert", "Investment Expert", "Intraday Trading", "+1 more"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Mentorship Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="category-card rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};