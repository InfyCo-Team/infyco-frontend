import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MessageCircle, Search } from "lucide-react";
import { Header } from "@/components/Header";

const Mentors = () => {
  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Engineer",
      company: "Google",
      rating: 4.9,
      mentees: 89,
      description: "Frontend specialist with expertise in React and modern web technologies.",
      skills: ["React", "TypeScript", "Next.js", "+2 more"]
    },
    // Add more mentors here
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">All Mentors</h1>
            <p className="text-gray-400 text-lg">Connect with experienced professionals</p>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search mentors by name or role..." 
              className="pl-12 py-6 bg-background rounded-full"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Select>
              <SelectTrigger className="w-[200px] rounded-full">
                <SelectValue placeholder="All Domains" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] rounded-full">
                <SelectValue placeholder="All Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Engineer</SelectItem>
                <SelectItem value="backend">Backend Engineer</SelectItem>
                <SelectItem value="fullstack">Fullstack Engineer</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] rounded-full">
                <SelectValue placeholder="All Companies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="meta">Meta</SelectItem>
                <SelectItem value="amazon">Amazon</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] rounded-full">
                <SelectValue placeholder="All Experience Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                <SelectItem value="mid">Mid (4-6 years)</SelectItem>
                <SelectItem value="senior">Senior (7+ years)</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] rounded-full">
                <SelectValue placeholder="Highest Rated" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="mentees">Most Mentees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="category-card rounded-2xl p-6">
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
                    <button className="text-gray-400 hover:text-primary rounded-full p-2 hover:bg-gray-800">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-primary rounded-full p-2 hover:bg-gray-800">
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
                    <span key={skill} className="text-xs bg-secondary px-3 py-1.5 rounded-full text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button className="w-full rounded-full">View Details & Connect</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;