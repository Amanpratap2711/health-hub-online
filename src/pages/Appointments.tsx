import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin,
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Eye,
  Bone,
  Users
} from "lucide-react";
import { toast } from "sonner";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    date: "",
    time: "",
    type: "",
    message: ""
  });

  const doctors = [
    {
      name: "Dr. Sarah Williams",
      specialty: "General Physician",
      experience: "15 years",
      icon: Stethoscope,
      available: "Mon - Sat"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      experience: "12 years",
      icon: Heart,
      available: "Mon - Fri"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10 years",
      icon: Baby,
      available: "Tue - Sat"
    },
    {
      name: "Dr. James Anderson",
      specialty: "Neurologist",
      experience: "18 years",
      icon: Brain,
      available: "Mon - Wed"
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Ophthalmologist",
      experience: "14 years",
      icon: Eye,
      available: "Mon - Sat"
    },
    {
      name: "Dr. Robert Kumar",
      specialty: "Orthopedist",
      experience: "16 years",
      icon: Bone,
      available: "Wed - Sun"
    }
  ];

  const specialties = [
    "General Physician",
    "Cardiologist",
    "Pediatrician",
    "Neurologist",
    "Ophthalmologist",
    "Orthopedist",
    "Dermatologist",
    "Gynecologist"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.specialty || !formData.date || !formData.time || !formData.type) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Success message
    toast.success("Appointment booked successfully! We'll send you a confirmation shortly.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialty: "",
      date: "",
      time: "",
      type: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Appointment</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation with our expert doctors. Choose between online video consultation or in-clinic visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium animate-slide-up">
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
                <CardDescription>Fill in your details to book an appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (234) 567-8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">Doctor Specialty *</Label>
                    <Select value={formData.specialty} onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Appointment Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Online Consultation
                          </div>
                        </SelectItem>
                        <SelectItem value="clinic">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            In-Clinic Visit
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your symptoms or concerns..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="shadow-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Clinic Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-medium animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Online Consultations</h3>
                    <p className="text-sm opacity-90">Available 24/7</p>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  Get instant access to our doctors through secure video consultations from anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20 shadow-medium animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">In-Clinic Visits</h3>
                    <p className="text-sm text-muted-foreground">Personalized Care</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visit our modern clinic for comprehensive physical examinations and treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Doctors Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Expert Doctors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our team of experienced and certified medical professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <doctor.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                      <p className="text-primary text-sm font-medium mb-2">{doctor.specialty}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Experience: {doctor.experience}</p>
                        <p>Available: {doctor.available}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
