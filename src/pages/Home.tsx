import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  Shield, 
  Award, 
  Headphones,
  Star,
  MessageCircle,
  ArrowRight,
  ClipboardList
} from "lucide-react";
import heroImage from "@/assets/hero-doctors.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock medical support for emergencies and consultations"
    },
    {
      icon: Shield,
      title: "Certified Doctors",
      description: "All our doctors are board-certified and experienced professionals"
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Highest standards of medical care with compassion"
    },
    {
      icon: Headphones,
      title: "Easy Booking",
      description: "Book appointments easily at our clinic"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      content: "Excellent service! The doctors are very professional and caring. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Patient",
      content: "The clinic is well-maintained and the staff is very helpful. Great experience overall!",
      rating: 5
    },
    {
      name: "Sunita Gupta",
      role: "Patient",
      content: "Very satisfied with the treatment. The doctors take time to listen and explain everything clearly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                Your Health, Our Priority
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Professional Healthcare{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  At Your Service
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Book appointments with certified doctors and get quality healthcare. 
                Your complete healthcare solution in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/appointments">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                  <Link to="/appointment-history">
                    <ClipboardList className="w-5 h-5 mr-2" />
                    View History
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Expert Doctors</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Healthcare Professionals" 
                className="relative rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive healthcare services with a focus on quality, convenience, and patient satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">
                Complete Healthcare Services
              </h2>
              <p className="text-muted-foreground">
                We offer a complete range of healthcare services to meet all your medical needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Medical Consultations</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with experienced doctors through in-person consultations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Health Checkups</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular health checkups and preventive care for your well-being
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Health Monitoring & Follow-ups</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular follow-up consultations for ongoing care
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </Card>
              <Card className="p-6 text-center bg-accent/5 border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </Card>
              <Card className="p-6 text-center bg-accent/5 border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">30min</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </Card>
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our satisfied patients who trust us with their healthcare needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold">Ready to Take Care of Your Health?</h2>
            <p className="text-lg opacity-90">
              Book an appointment with our expert doctors today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/appointments">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/appointment-history">
                  <ClipboardList className="w-5 h-5 mr-2" />
                  View History
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/917708987656"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
      </a>
    </div>
  );
};

export default Home;