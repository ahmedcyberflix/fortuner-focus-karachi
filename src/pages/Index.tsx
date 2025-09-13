import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { 
  Car, 
  Heart, 
  MapPin, 
  Calendar, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Star,
  Users,
  Settings,
  Award
} from "lucide-react";

// Import car images
import heroFortuner from "@/assets/hero-fortuner.jpg";
import fortunerFeatured from "@/assets/fortuner-featured.jpg";
import corollaFeatured from "@/assets/corolla-featured.jpg";
import altoFeatured from "@/assets/alto-featured.jpg";

const Index = () => {
  const services = [
    {
      icon: Car,
      title: "Car Rental in Karachi",
      description: "Daily and hourly rentals for errands, meetings, and city travel",
      href: "/services/car-rental-karachi",
      features: ["Self-drive or with driver", "Flexible timing", "City-wide coverage"]
    },
    {
      icon: Heart,
      title: "Wedding Cars",
      description: "Premium cars with chauffeurs for your special day",
      href: "/services/wedding-cars-karachi",
      features: ["Luxury vehicles", "Professional drivers", "Decoration options"]
    },
    {
      icon: MapPin,
      title: "City-to-City Transport",
      description: "Safe and comfortable inter-city travel across Pakistan",
      href: "/services/city-to-city-car-rental",
      features: ["Highway-experienced drivers", "Long-distance comfort", "Door-to-door service"]
    },
    {
      icon: Calendar,
      title: "Monthly Car Rental",
      description: "Cost-effective long-term rental solutions",
      href: "/services/monthly-car-rental",
      features: ["Discounted rates", "Maintenance included", "Flexible terms"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "No Hidden Charges",
      description: "Transparent, upfront pricing with clear terms"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and professional drivers"
    },
    {
      icon: CheckCircle,
      title: "Clean, Well-Maintained Cars",
      description: "Regularly serviced vehicles for your safety and comfort"
    },
    {
      icon: Phone,
      title: "Quick Booking",
      description: "Book via call, WhatsApp, or online in minutes"
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Daily, monthly, and custom rental packages"
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "Reliable car rental service serving Karachi since years"
    }
  ];

  const featuredCars = [
    {
      id: "fortuner",
      name: "Toyota Fortuner",
      image: fortunerFeatured,
      description: "7-seater luxury SUV perfect for families and outstation trips",
      features: ["7 Seats", "Automatic", "AC", "Luxury"],
      badge: "Most Popular",
      badgeVariant: "popular" as const,
      href: "/toyota-fortuner-rental-karachi"
    },
    {
      id: "corolla",
      name: "Toyota Corolla",
      image: corollaFeatured,
      description: "Reliable sedan ideal for city travel and business meetings",
      features: ["5 Seats", "Automatic", "AC", "Comfortable"],
      href: "/cars"
    },
    {
      id: "alto",
      name: "Suzuki Alto",
      image: altoFeatured,
      description: "Economy car perfect for daily commutes and short trips",
      features: ["4 Seats", "Manual", "AC", "Economical"],
      href: "/cars"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Business Traveler",
      content: "Excellent service! Booked a Fortuner for my family trip to Murree. Professional driver and well-maintained car.",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      role: "Wedding Customer",
      content: "RentOnUs made our wedding day perfect with their luxury cars and punctual service. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Hassan Ali",
      role: "Monthly Renter",
      content: "Great monthly rental rates. Using their Corolla for 6 months now. Very reliable and cost-effective.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFortuner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero text */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Reliable, Affordable<br />
                  <span className="text-accent">Car Rentals</span><br />
                  in Karachi
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Self-drive or with driver · Daily, Monthly, Weddings & City-to-City
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">Book Now</a>
                </Button>
                <div className="flex gap-3">
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="phone" size="lg" asChild>
                    <a href="tel:+923075777559">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact Info */}
            <div className="lg:max-w-md">
              <div className="bg-background/10 backdrop-blur rounded-lg p-8 space-y-6 animate-slide-up">
                <h2 className="text-2xl font-bold text-white">Ready to Book?</h2>
                <p className="text-white/90">Contact us now for instant booking and best rates!</p>
                <div className="space-y-4">
                  <Button variant="whatsapp" size="lg" asChild className="w-full">
                    <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button variant="phone" size="lg" asChild className="w-full">
                    <a href="tel:+923075777559">
                      <Phone className="w-5 h-5" />
                      Call +92-307-577-7559
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Car Rental Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From daily rentals to special occasions, we've got the perfect car for every need in Karachi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="trust-card group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={service.href}>Learn More</Link>
                    </Button>
                    <Button variant="cta" size="sm" asChild className="flex-1">
                      <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">Book Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Featured Fleet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of well-maintained, reliable vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="vehicle-card group overflow-hidden">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={`${car.name} rental in Karachi`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {car.badge && (
                    <Badge className={`absolute top-4 left-4 ${car.badgeVariant === 'popular' ? 'popular-badge' : 'featured-badge'}`}>
                      {car.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{car.name}</CardTitle>
                  <CardDescription>{car.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="cta" size="lg" asChild className="w-full">
                    <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20{car.name}.">
                      {car.id === 'fortuner' ? 'Book Fortuner' : 'Book This Car'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/cars">View All Cars</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RentOnUs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, transparency, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied customers across Karachi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="trust-card">
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
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Rent Your Perfect Car?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Book online, call, or WhatsApp us for instant availability and the best rates in Karachi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">Book Now</a>
              </Button>
              <div className="flex gap-4">
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:+923075777559" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>+92-307-577-7559</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
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

export default Index;
