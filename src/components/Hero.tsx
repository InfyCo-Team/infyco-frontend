import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Connect, Learn, and Grow with InfyCo
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Get personalized mentorship from industry experts and accelerate your career growth
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Book Free Session →
        </Button>
      </div>
    </section>
  );
};