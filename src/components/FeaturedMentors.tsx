import { Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const FeaturedMentors = () => {
  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Engineer",
      company: "Google",
      rating: 4.9,
      mentees: 89,
      description: "Frontend specialist with expertise in React and modern web technologies.",
      skills: ["React", "TypeScript", "Next.js", "+2 more"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Mentors</h2>
          <Button variant="outline">See All Mentors</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="category-card rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600" />
                  <div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-gray-400">{mentor.role}</p>
                    <p className="text-sm text-gray-400">{mentor.company}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-primary">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-primary">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 items-center mb-4">
                <span className="text-yellow-400">★</span>
                <span className="font-medium">{mentor.rating}</span>
                <span className="text-gray-400">({mentor.mentees} mentees)</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{mentor.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-secondary px-2 py-1 rounded-full text-gray-400">
                    {skill}
                  </span>
                ))}
              </div>
              <Button className="w-full">View Details & Connect</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};