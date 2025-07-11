import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, User, Building2, Mail, Lock, Phone, MapPin, Globe, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"user" | "company">("user");

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Benefits */}
          <div className="text-white space-y-8 animate-fade-in">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-8">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold">SkillBridge</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {userType === "user" ? "Transform Your Career" : "Empower Your Workforce"}
              </h1>
              <p className="text-xl text-white/90">
                {userType === "user" 
                  ? "Join thousands of learners building their future with verified skills and direct job connections."
                  : "Partner with us to upskill your team and discover top talent from our verified learner community."
                }
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {userType === "user" ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="bg-success/20 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <span>200+ Free Skill Courses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-warning/20 p-2 rounded-full">
                      <Badge className="h-5 w-5 text-white" />
                    </div>
                    <span>Verified Certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-glow/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span>Direct Job Placements</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="bg-success/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span>Access 50,000+ Skilled Candidates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-warning/20 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <span>Custom Training Programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-glow/20 p-2 rounded-full">
                      <Badge className="h-5 w-5 text-white" />
                    </div>
                    <span>Verified Skill Assessments</span>
                  </div>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-white/80 text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-white/80 text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="animate-slide-up">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="space-y-4">
                <div className="flex justify-center">
                  <Tabs value={userType} onValueChange={(value) => setUserType(value as "user" | "company")} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-muted">
                      <TabsTrigger value="user" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Individual</span>
                      </TabsTrigger>
                      <TabsTrigger value="company" className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4" />
                        <span>Company</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="text-center">
                  <CardTitle className="text-2xl">
                    {isLogin ? "Welcome Back" : "Join SkillBridge"}
                  </CardTitle>
                  <CardDescription>
                    {isLogin 
                      ? `Sign in to your ${userType} account`
                      : `Create your ${userType} account`
                    }
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Tabs value={userType} className="w-full">
                  <TabsContent value="user" className="space-y-4">
                    {/* User Forms */}
                    {!isLogin && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                      </div>
                    </div>

                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" placeholder="Enter your phone number" className="pl-10" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1.5 h-7 w-7"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="location" placeholder="City, State" className="pl-10" />
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="company" className="space-y-4">
                    {/* Company Forms */}
                    {!isLogin && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="companyName" placeholder="Enter company name" className="pl-10" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contactPerson">Contact Person</Label>
                            <Input id="contactPerson" placeholder="Full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="designation">Designation</Label>
                            <Input id="designation" placeholder="Job title" />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="companyEmail">Company Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="companyEmail" type="email" placeholder="company@example.com" className="pl-10" />
                      </div>
                    </div>

                    {!isLogin && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="companyPhone">Company Phone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="companyPhone" placeholder="Company phone number" className="pl-10" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Website (Optional)</Label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="website" placeholder="https://company.com" className="pl-10" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="companySize">Company Size</Label>
                          <select className="w-full p-3 border border-input rounded-md bg-background">
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="companyPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="companyPassword" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter password" 
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1.5 h-7 w-7"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Remember me</span>
                    </label>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Forgot password?
                    </Button>
                  </div>
                )}

                <Button variant="hero" className="w-full text-lg py-6">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>

                <div className="text-center">
                  <span className="text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </span>
                  <Button 
                    variant="link" 
                    className="p-0 ml-1 text-primary font-semibold"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </Button>
                </div>

                {!isLogin && (
                  <p className="text-xs text-muted-foreground text-center">
                    By creating an account, you agree to our{" "}
                    <Button variant="link" className="p-0 h-auto text-xs">Terms of Service</Button>
                    {" "}and{" "}
                    <Button variant="link" className="p-0 h-auto text-xs">Privacy Policy</Button>
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;