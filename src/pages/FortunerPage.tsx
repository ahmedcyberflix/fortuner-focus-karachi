import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { 
  Car, 
  Users, 
  Settings, 
  Shield, 
  Star, 
  CheckCircle,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Fuel,
  Award
} from "lucide-react";

import fortunerHero from "@/assets/hero-fortuner.jpg";
import fortunerFeatured from "@/assets/fortuner-featured.jpg";

const FortunerPage = () => {
  const features = [
    {
      icon: Users,
      title: "Spacious 7-Seater",
      description: "Comfortable seating for entire family or group"
    },
    {
      icon: Settings,
      title: "Powerful AC & Comfort",
      description: "Climate control for all passengers, premium interiors"
    },
    {
      icon: Shield,
      title: "Safety Features",
      description: "Advanced safety systems and reliable performance"
    },
    {
      icon: Star,
      title: "Perfect for Special Occasions",
      description: "Ideal for weddings, corporate events, and family trips"
    }
  ];

  const specifications = [
    { label: "Model Years", value: "2018-2024" },
    { label: "Seating", value: "7 Passengers" },
    { label: "Transmission", value: "Automatic" },
    { label: "Luggage", value: "Large Boot Space" },
    { label: "Fuel", value: "Customer Responsibility" },
    { label: "Driver Options", value: "With/Without Driver" },
  ];

  const useCases = [
    {
      icon: Car,
      title: "City Travel",
      description: "Comfortable rides across Karachi with family or friends"
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Perfect for highway travel to other cities"
    },
    {
      icon: Award,
      title: "Corporate Events",
      description: "Professional transport for business meetings and events"
    },
    {
      icon: Calendar,
      title: "Weddings & Celebrations",
      description: "Luxury transport for special occasions"
    }
  ];

  const fortunerFAQs = [
    {
      question: "Is the Toyota Fortuner available for self-drive?",
      answer: "Yes, the Fortuner is available for both self-drive and with professional driver options. Valid driving license required for self-drive."
    },
    {
      question: "What documents are required for Fortuner rental?",
      answer: "Valid CNIC, driving license (for self-drive), and security deposit. Additional documents may be required for outstation travel."
    },
    {
      question: "Are there any mileage restrictions?",
      answer: "Daily rentals include reasonable mileage. Additional charges apply for excess mileage. Monthly rentals have generous mileage allowances."
    },
    {
      question: "Can I take the Fortuner outside Karachi?",
      answer: "Yes, outstation travel is allowed with advance notice. Additional charges and driver accommodation costs apply for overnight trips."
    }
  ];

  const testimonials = [
    {
      name: "Sameer Khan",
      occasion: "Family Wedding",
      content: "Booked the Fortuner for our family wedding. Spacious, comfortable, and the driver was very professional. Perfect choice for special occasions!",
      rating: 5
    },
    {
      name: "Maria Ahmed",
      occasion: "Corporate Event",
      content: "Used RentOnUs Fortuner for a corporate retreat to Murree. Excellent condition, smooth ride, and reliable service. Highly recommended!",
      rating: 5
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
              <BreadcrumbLink asChild>
                <Link to="/cars">Fleet</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Toyota Fortuner</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fortunerHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="popular-badge text-lg px-4 py-2">
                  Most Popular Choice
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Toyota Fortuner<br />
                  <span className="text-accent">for Rent</span><br />
                  in Karachi
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Experience Karachi in comfort and style with the Toyota Fortuner — a spacious 7-seater luxury SUV built for city drives and outstation trips. Perfect for weddings, corporate travel, and family adventures.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="#booking">Reserve Fortuner</Link>
                </Button>
                <div className="flex gap-3">
                  <Button variant="phone" size="lg" asChild>
                    <a href="tel:03075777559">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20Toyota%20Fortuner.">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar (Desktop & Mobile) */}
      <div className="sticky top-16 z-40 bg-accent/95 backdrop-blur border-b shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <h3 className="text-lg font-semibold text-accent-foreground">
                Reserve Toyota Fortuner Today
              </h3>
              <p className="text-sm text-accent-foreground/80">
                Limited availability — Book early to secure your dates
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="phone" size="sm" asChild className="flex-1 md:flex-none">
                <a href="tel:03075777559">Call</a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild className="flex-1 md:flex-none">
                <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20Toyota%20Fortuner.">
                  WhatsApp
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild className="flex-1 md:flex-none">
                <Link to="#booking">Reserve Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={fortunerFeatured} 
                alt="Toyota Fortuner interior and exterior features"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Fortuner Features & Benefits
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover why the Toyota Fortuner is the preferred choice for luxury travel in Karachi
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fortuner Specifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Technical details and rental terms for the Toyota Fortuner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="w-6 h-6 text-accent" />
                    <span>Vehicle Specifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={spec.label}>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </div>
                      {index < specifications.length - 1 && <Separator />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-accent" />
                    <span>Perfect For</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {useCases.map((useCase) => (
                    <div key={useCase.title} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <useCase.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{useCase.title}</h4>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reserve Your Toyota Fortuner
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll confirm your Fortuner booking within minutes
              </p>
            </div>
            
            <BookingForm preselectedCar="Toyota Fortuner (7-seater SUV)" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fortuner Rental FAQ
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about renting the Toyota Fortuner
              </p>
            </div>
            
            <div className="space-y-6">
              {fortunerFAQs.map((faq, index) => (
                <Card key={index} className="trust-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have more questions about the Toyota Fortuner?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:03075777559">
                    <Phone className="w-5 h-5" />
                    Call for Details
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20have%20questions%20about%20the%20Toyota%20Fortuner.">
                    <MessageCircle className="w-5 h-5" />
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fortuner Customer Reviews
              </h2>
              <p className="text-lg text-muted-foreground">
                Real experiences from customers who chose the Toyota Fortuner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="trust-card">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience the Toyota Fortuner?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Book now and enjoy luxury, comfort, and reliability on every journey in Karachi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="#booking">Reserve Fortuner Now</Link>
              </Button>
              <div className="flex gap-4 justify-center">
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:03075777559">
                    <Phone className="w-5 h-5" />
                    Call
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20Toyota%20Fortuner.">
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

export default FortunerPage;