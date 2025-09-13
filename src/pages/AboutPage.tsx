import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Car, 
  Shield, 
  Clock, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle,
  Phone,
  MessageCircle,
  Heart
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We believe in transparent pricing and honest service. No hidden charges, no surprises."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock support for our customers, ensuring help is always available when needed."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction at the center."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in vehicle maintenance and customer service."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Weddings Served" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years of Service" }
  ];

  const team = [
    {
      name: "Muhammad Ahmed",
      role: "Founder & CEO",
      description: "Passionate about providing excellent car rental services to the people of Karachi."
    },
    {
      name: "Fatima Khan",
      role: "Operations Manager",
      description: "Ensures smooth operations and maintains our high-quality service standards."
    },
    {
      name: "Hassan Ali",
      role: "Fleet Manager",
      description: "Responsible for maintaining our vehicles in perfect condition for customer safety."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              About RentOnUs
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted car rental partner in Karachi, committed to providing reliable, affordable, and professional transportation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RentOnUs was founded with a simple mission: to make car rental in Karachi transparent, 
                  affordable, and hassle-free. We started as a small family business and have grown 
                  into one of Karachi's trusted car rental services.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  What sets us apart is our commitment to honest pricing, well-maintained vehicles, 
                  and customer service that goes above and beyond. Whether you need a car for a 
                  wedding, business meeting, or family trip, we treat every rental with the same 
                  level of care and attention.
                </p>
                
                <p className="text-muted-foreground">
                  Our team understands the unique transportation needs of Karachi residents and 
                  visitors. From navigating busy city streets to comfortable outstation journeys, 
                  we ensure every ride is safe, comfortable, and reliable.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="trust-card text-center">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-accent">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at RentOnUs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="trust-card text-center group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind RentOnUs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="trust-card text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Customers Choose RentOnUs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us the preferred car rental service in Karachi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Transparent Pricing
              </h3>
              <p className="text-muted-foreground">
                No hidden charges or surprise fees. What you see is what you pay, with clear terms and conditions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Well-Maintained Fleet
              </h3>
              <p className="text-muted-foreground">
                Regular maintenance and safety checks ensure our vehicles are always in top condition for your journey.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Flexible Service
              </h3>
              <p className="text-muted-foreground">
                Daily, monthly, and custom rental packages. Self-drive or with professional drivers available.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Local Expertise
              </h3>
              <p className="text-muted-foreground">
                Deep knowledge of Karachi routes and traffic patterns for efficient and safe transportation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Customer Care
              </h3>
              <p className="text-muted-foreground">
                Personal attention to every customer, treating each rental like it's for our own family.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground">
                Years of satisfied customers and successful rentals across Karachi and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience the RentOnUs Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join hundreds of satisfied customers who trust us for their transportation needs in Karachi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/#booking">Book Your Car</Link>
              </Button>
              <div className="flex gap-4 justify-center">
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:03075777559">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20know%20more%20about%20your%20services.">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;