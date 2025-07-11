import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play, Award } from "lucide-react";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      description: "Learn social media marketing, SEO, and content creation to build your online presence and grow your business.",
      category: "Business Skills",
      level: "Beginner",
      duration: "8 weeks",
      students: 2400,
      rating: 4.8,
      price: "Free",
      image: "🚀",
      skills: ["Social Media", "SEO", "Content Creation"]
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      description: "Build modern websites and web applications using HTML, CSS, JavaScript, and React. Perfect for career transition.",
      category: "Technology",
      level: "Intermediate",
      duration: "12 weeks",
      students: 1800,
      rating: 4.9,
      price: "Free",
      image: "💻",
      skills: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      id: 3,
      title: "Entrepreneurship & Business Planning",
      description: "Turn your ideas into reality. Learn business planning, funding strategies, and how to start your own venture.",
      category: "Entrepreneurship",
      level: "Beginner",
      duration: "6 weeks",
      students: 3200,
      rating: 4.7,
      price: "Free",
      image: "💡",
      skills: ["Business Planning", "Strategy", "Leadership"]
    },
    {
      id: 4,
      title: "Data Analysis with Excel & Python",
      description: "Master data analysis skills that are in high demand. Learn Excel, Python basics, and data visualization.",
      category: "Data Skills",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1500,
      rating: 4.8,
      price: "Free",
      image: "📊",
      skills: ["Excel", "Python", "Data Viz"]
    },
    {
      id: 5,
      title: "English Communication for Professionals",
      description: "Improve your English speaking and writing skills for better job opportunities and career growth.",
      category: "Language",
      level: "Beginner",
      duration: "8 weeks",
      students: 4100,
      rating: 4.6,
      price: "Free",
      image: "🗣️",
      skills: ["Speaking", "Writing", "Presentation"]
    },
    {
      id: 6,
      title: "Financial Literacy & Investment",
      description: "Learn personal finance, budgeting, and investment basics to secure your financial future.",
      category: "Finance",
      level: "Beginner",
      duration: "6 weeks",
      students: 2800,
      rating: 4.7,
      price: "Free",
      image: "💰",
      skills: ["Budgeting", "Investment", "Planning"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular courses designed to build in-demand skills and advance your career.
            All courses include verified certifications upon completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={course.id} className="group hover:shadow-brand transition-all duration-300 hover:scale-105 bg-gradient-card border-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{course.image}</div>
                  <Badge variant={course.level === "Beginner" ? "default" : "secondary"}>
                    {course.level}
                  </Badge>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-3">
                    {course.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    {course.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-warning text-warning" />
                    {course.rating}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-success">{course.price}</span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Certificate included
                  </div>
                </div>
                <Button variant="hero" className="group-hover:scale-105">
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;