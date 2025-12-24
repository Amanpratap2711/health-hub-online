import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle,
  User,
  Phone as PhoneIcon,
  Stethoscope,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  date: string;
  time: string;
  message: string;
  status: "pending" | "completed";
  bookedAt: Date;
}

const AppointmentHistory = () => {
  // Sample appointments - in real app this would come from database/API
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1703001",
      name: "राजेश शर्मा",
      email: "rajesh@example.com",
      phone: "+91 7708987656",
      specialty: "General Physician",
      date: "2024-12-20",
      time: "10:30",
      message: "सामान्य स्वास्थ्य जांच",
      status: "completed",
      bookedAt: new Date("2024-12-18")
    },
    {
      id: "1703002",
      name: "प्रिया पाटिल",
      email: "priya@example.com",
      phone: "+91 7708987656",
      specialty: "Cardiologist",
      date: "2024-12-22",
      time: "14:00",
      message: "दिल की जांच",
      status: "pending",
      bookedAt: new Date("2024-12-19")
    },
    {
      id: "1703003",
      name: "अमित कुमार",
      email: "amit@example.com",
      phone: "+91 7708987656",
      specialty: "Orthopedist",
      date: "2024-12-24",
      time: "11:00",
      message: "घुटने में दर्द",
      status: "pending",
      bookedAt: new Date("2024-12-20")
    }
  ]);

  const handleCompleteAppointment = (id: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === id ? { ...apt, status: "completed" as const } : apt
      )
    );
    toast.success("अपॉइंटमेंट पूर्ण हो गई!");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN', { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateB.getTime() - dateA.getTime();
  });

  const pendingCount = appointments.filter(a => a.status === "pending").length;
  const completedCount = appointments.filter(a => a.status === "completed").length;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Appointment <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">History</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View and manage all your booked appointments
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-medium animate-slide-up">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-3xl font-bold">{appointments.length}</p>
                <p className="text-sm text-muted-foreground">Total Appointments</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">{pendingCount}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">{completedCount}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        {appointments.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAppointments.map((appointment, index) => (
              <Card 
                key={appointment.id}
                className={`shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up ${
                  appointment.status === "completed" ? "bg-accent/5 border-accent/30" : "border-border"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={appointment.status === "completed" ? "secondary" : "default"}
                      className={appointment.status === "completed" ? "bg-accent/20 text-accent" : ""}
                    >
                      {appointment.status === "completed" ? (
                        <><CheckCircle className="w-3 h-3 mr-1" /> Completed</>
                      ) : (
                        "Pending"
                      )}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      #{appointment.id}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{appointment.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <PhoneIcon className="w-4 h-4" />
                      <span>{appointment.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Stethoscope className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">{appointment.specialty}</span>
                    </div>

                    <div className="flex items-center gap-4 pt-2 border-t border-border">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                        <span>{formatDate(appointment.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>

                    {appointment.message && (
                      <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                        {appointment.message}
                      </p>
                    )}
                  </div>

                  {appointment.status === "pending" && (
                    <Button 
                      onClick={() => handleCompleteAppointment(appointment.id)}
                      className="w-full mt-4"
                      variant="outline"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark as Complete
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <CalendarIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Appointments Yet</h3>
              <p className="text-muted-foreground">
                Book an appointment to see your history here
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AppointmentHistory;