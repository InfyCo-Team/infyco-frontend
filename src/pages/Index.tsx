import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Companies } from "@/components/Companies";
import { Categories } from "@/components/Categories";
import { FeaturedMentors } from "@/components/FeaturedMentors";
import { WhyChoose } from "@/components/WhyChoose";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Companies />
        <Categories />
        <FeaturedMentors />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
};

export default Index;