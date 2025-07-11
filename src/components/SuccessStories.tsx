import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, MapPin, TrendingUp } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Rural Maharashtra",
      achievement: "Started Digital Marketing Agency",
      story: "After completing the Digital Marketing course, I started my own agency and now help 50+ local businesses grow online. My monthly income increased by 400%!",
      course: "Digital Marketing Mastery",
      income: "₹45,000/month",
      timeframe: "6 months",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      location: "Jharkhand Village",
      achievement: "Full Stack Developer at Tech Company",
      story: "From farming to coding! The Web Development course changed my life. Now I work remotely for a Bangalore startup and support my entire family.",
      course: "Web Development Fundamentals",
      income: "₹65,000/month",
      timeframe: "8 months",
      avatar: "RK"
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Gujarat Rural Area",
      achievement: "Successful Handicraft Business",
      story: "The Entrepreneurship course taught me how to scale my handicraft business online. I now export to 15 countries and employ 20 women from my village.",
      course: "Entrepreneurship & Business Planning",
      income: "₹80,000/month",
      timeframe: "4 months",
      avatar: "AP"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real transformations. See how SkillBridge learners are building better futures
            and creating opportunities in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={story.id} className="group hover:shadow-success transition-all duration-500 hover:scale-105 bg-gradient-card border-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Avatar className="h-12 w-12 border-2 border-success">
                    <AvatarFallback className="bg-success text-success-foreground font-semibold">
                      {story.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{story.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {story.course}
                    </Badge>
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className="h-6 w-6 text-primary mb-3 opacity-50" />
                  <p className="text-foreground leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-success mb-3">{story.achievement}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Monthly Income</div>
                      <div className="font-semibold text-success flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {story.income}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Timeframe</div>
                      <div className="font-semibold">{story.timeframe}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their lives through skill development.
              Your journey to success starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-sm text-white/80">Lives Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-white/80">Job Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">₹35,000</div>
                <div className="text-sm text-white/80">Average Income Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;