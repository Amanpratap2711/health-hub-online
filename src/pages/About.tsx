import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Award, Users, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We put our patients first, ensuring personalized and compassionate healthcare services for everyone."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in medical care with certified professionals."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality healthcare accessible to everyone through our clinic in Kalyan East."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency services for your peace of mind."
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Happy Patients", value: "500+" },
    { label: "Expert Doctors", value: "10+" },
    { label: "Services Available", value: "20+" }
  ];

  const team = [
    {
      name: "Dr. Suresh Sharma",
      role: "Chief Medical Officer",
      specialty: "Internal Medicine"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Cardiology",
      specialty: "Cardiology"
    },
    {
      name: "Dr. Anjali Gupta",
      role: "Pediatrics Lead",
      specialty: "Pediatrics"
    },
    {
      name: "Rajesh Deshmukh",
      role: "Chief Pharmacist",
      specialty: "Pharmaceutical Sciences"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Healthcare Appointment</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Your trusted partner in healthcare, committed to providing quality medical services with compassion and expertise.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center border-border hover:shadow-medium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-primary/20 bg-primary/5 animate-slide-up">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services to everyone. We aim to bridge the gap between patients and healthcare providers through compassionate care, ensuring that quality medical assistance is always available.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted healthcare provider in Kalyan and Thane region, revolutionizing how people access medical services. We envision a future where quality healthcare is available to everyone, ensuring better health outcomes for our community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a simple mission: to make quality healthcare accessible to everyone in Kalyan East and surrounding areas. What started as a small clinic with a handful of dedicated healthcare professionals has grown into a trusted healthcare center serving hundreds of patients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of experienced doctors, nurses, and staff work tirelessly to ensure every patient receives the care they deserve. We combine the warmth of personal care with modern medical practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be a trusted healthcare provider in our community. Our commitment to excellence and patient satisfaction drives everything we do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-hero border-primary/20 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Certified & Accredited</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our healthcare facility is fully licensed and accredited by relevant health authorities. 
              All our doctors are board-certified professionals with extensive experience in their respective fields.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold text-primary">Medical Board Certified</p>
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-lg">
                <p className="text-sm font-semibold text-accent">Licensed Healthcare</p>
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold text-primary">ISO Certified</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;