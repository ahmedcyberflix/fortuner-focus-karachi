import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
import { 
  Shield, 
  Clock, 
  Car, 
  MessageCircle, 
  Calendar,
  Phone,
  Star,
  CheckCircle,
  Users,
  Briefcase,
  ShoppingBag,
  MapPin,
  Plane,
  Eye
} from "lucide-react";
import fortunerImage from "@/assets/fortuner-featured.jpg";
import corollaImage from "@/assets/corolla-featured.jpg";
import altoImage from "@/assets/alto-featured.jpg";

const CarRentalKarachiPage = () => {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  const benefits = [
    {
      icon: Shield,
      title: "No hidden charges",
      description: "Clear, upfront terms"
    },
    {
      icon: Clock,
      title: "24/7 support",
      description: "Professional drivers"
    },
    {
      icon: Car,
      title: "Clean fleet",
      description: "Well-maintained vehicles"
    },
    {
      icon: MessageCircle,
      title: "Quick booking",
      description: "Call, WhatsApp, or Online"
    },
    {
      icon: Calendar,
      title: "Flexible plans",
      description: "Daily, weekly, and monthly"
    }
  ];

  const featuredVehicles = [
    {
      name: "Toyota Fortuner",
      subtitle: "7-Seater Premium SUV",
      description: "Spacious, comfortable, perfect for families, weddings & corporate travel.",
      image: fortunerImage,
      badge: "Premium Choice",
      cta: "Reserve Fortuner",
      link: "/toyota-fortuner-rental-karachi"
    },
    {
      name: "Toyota Corolla",
      subtitle: "Comfortable Sedan",
      description: "Smooth ride for city errands & business meetings.",
      image: corollaImage,
      cta: "Check Availability"
    },
    {
      name: "Suzuki Alto",
      subtitle: "Smart Budget Choice",
      description: "Easy to park, fuel-efficient for everyday runs.",
      image: altoImage,
      cta: "Check Availability"
    }
  ];

  const bookingSteps = [
    {
      step: "1",
      title: "Tell us your needs",
      description: "Share your dates and preferred car via call, WhatsApp, or online."
    },
    {
      step: "2",
      title: "Confirm details",
      description: "Self-drive documents or driver option, pickup/drop locations."
    },
    {
      step: "3",
      title: "Drive away",
      description: "On-time handover, clean vehicle, simple terms."
    }
  ];

  const useCases = [
    { icon: Plane, label: "Airport pickup" },
    { icon: Briefcase, label: "Client meetings" },
    { icon: ShoppingBag, label: "Shopping days" },
    { icon: MapPin, label: "Weekend trips" },
    { icon: Users, label: "Visiting relatives" },
    { icon: Eye, label: "Test-drives before purchase" }
  ];

  const faqs = [
    {
      question: "Do you offer self-drive and with-driver?",
      answer: "Yes, both options are available. Choose self-drive for independence or opt for our professional drivers for a more relaxed experience."
    },
    {
      question: "What documents are needed for self-drive?",
      answer: "CNIC, valid driving license, and a refundable security deposit are required for self-drive rentals."
    },
    {
      question: "What's your fuel policy?",
      answer: "Fuel is customer's responsibility unless agreed otherwise. We provide vehicles with sufficient fuel for pickup."
    },
    {
      question: "Is there a mileage limit?",
      answer: "Standard in-city usage is included. Outstation trips require prior approval and may have different terms."
    },
    {
      question: "Can I extend my booking?",
      answer: "Yes, subject to availability. Please let us know early to ensure seamless extension."
    },
    {
      question: "Do you provide breakdown support?",
      answer: "24/7 assistance is available. Replacement vehicle provided when available for extended breakdowns."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Cash and bank transfer. Corporate invoicing is available for business clients."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Free cancellation up to 24 hours before pickup. Special cases may have different terms."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
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
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Car Rental in Karachi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Car Rental in Karachi <br />
                <span className="text-primary">(Self-Drive & With Driver)</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Need a reliable car in Karachi—today or next week? RentOnUs makes it easy. Choose self-drive or chauffeur service, from budget-friendly hatchbacks to premium SUVs like the Toyota Fortuner. Transparent terms, clean cars, quick booking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car%20rental%20in%20Karachi.">
                    Book Now
                  </a>
                </Button>
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:+923075777559" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car%20rental%20in%20Karachi." className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Featured Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.name} - ${vehicle.subtitle} for rent in Karachi`}
                      className="w-full h-48 object-cover"
                    />
                    {vehicle.badge && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {vehicle.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{vehicle.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{vehicle.description}</p>
                    <Button 
                      variant={vehicle.badge ? "premium" : "outline"} 
                      className="w-full" 
                      asChild
                    >
                      {vehicle.link ? (
                        <Link to={vehicle.link}>{vehicle.cta}</Link>
                      ) : (
                        <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20check%20availability%20for%20car%20rental%20in%20Karachi.">{vehicle.cta}</a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Booking Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">How Booking Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bookingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Popular Use Cases</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-2 bg-background px-4 py-2 rounded-full border">
                  <useCase.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{useCase.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "Smooth, on-time, zero hassles. Booked a Fortuner for a family trip — highly recommended!"
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— A. Khan</cite>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Ready to rent in Karachi?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car%20rental%20in%20Karachi.">
                  Book Online
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="tel:+923075777559" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +92 307 5777559</span>
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car%20rental%20in%20Karachi." className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 bg-background border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4">
              Explore our <Link to="/cars" className="text-primary hover:underline">complete fleet</Link> and learn more about the <Link to="/toyota-fortuner-rental-karachi" className="text-accent hover:underline">Toyota Fortuner</Link> (our most-booked SUV).
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Car Rental in Karachi",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RentOnUs",
              "telephone": "+923075777559",
              "address": "Karachi, Pakistan"
            },
            "areaServed": "Karachi",
            "serviceType": "Car Rental (Self-drive & With Driver)",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.rentonus.live/services/car-rental-karachi"
            }
          })
        }}
      />
    </>
  );
};

export default CarRentalKarachiPage;