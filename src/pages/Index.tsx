import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import SuccessStories from "@/components/SuccessStories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedCourses />
      <SuccessStories />
    </div>
  );
};

export default Index;
