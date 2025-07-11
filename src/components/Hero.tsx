import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award, Target } from "lucide-react";
import heroImage from "@/assets/skillbridge-hero.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering
            <span className="bg-gradient-to-r from-warning to-success bg-clip-text text-transparent"> Dreams</span>
            <br />
            Through Digital
            <span className="bg-gradient-to-r from-success to-warning bg-clip-text text-transparent"> Skills</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of rural youth, women, and students building their future with 
            personalized learning, verified certifications, and direct job connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Explore Courses
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-warning" />
              </div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/80">Learners Empowered</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-white/80">Skill Courses</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-warning" />
              </div>
              <div className="text-3xl font-bold text-white">15K+</div>
              <div className="text-white/80">Certifications Issued</div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-white/80">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-warning/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-success/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Hero;