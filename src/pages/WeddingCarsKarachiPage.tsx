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
  Heart, 
  Clock, 
  Car, 
  MessageCircle, 
  Calendar,
  Phone,
  Star,
  CheckCircle,
  Users,
  Camera,
  Sparkles,
  Shield
} from "lucide-react";
import fortunerImage from "@/assets/fortuner-featured.jpg";
import corollaImage from "@/assets/corolla-featured.jpg";
import altoImage from "@/assets/alto-featured.jpg";

const WeddingCarsKarachiPage = () => {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  const packages = [
    {
      name: "Bridal Car Package",
      description: "Fortuner or Corolla with chauffeur, on-time pick & drop, clean décor-ready vehicle.",
      includes: "Fuel (optional), water tissues, driver on standby",
      badge: "Most Popular",
      cta: "Reserve Bridal Car"
    },
    {
      name: "Family & Guest Shuttle",
      description: "Multiple cars for guest movements between home, venue & photoshoots.",
      includes: "Coordinated schedule, professional drivers",
      cta: "Book Shuttle Service"
    },
    {
      name: "Photoshoot Hourly",
      description: "Fortuner for 3–5 hours; perfect for portraits and reels.",
      includes: "Flexible timing, clean vehicle, driver waiting",
      cta: "Book Photoshoot Package"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Professional chauffeurs",
      description: "Courteous & well-dressed"
    },
    {
      icon: Clock,
      title: "On-time schedules",
      description: "Coordinated & punctual"
    },
    {
      icon: Sparkles,
      title: "Clean, décor-friendly cars",
      description: "Spotless & ready to decorate"
    },
    {
      icon: Calendar,
      title: "Flexible event plans",
      description: "Mehndi/Barat/Walima coverage"
    },
    {
      icon: Shield,
      title: "24/7 support",
      description: "Available on your big day"
    }
  ];

  const suggestedCars = [
    {
      name: "Toyota Fortuner",
      subtitle: "Most Requested",
      description: "Elevated stance, roomy & premium for the perfect entrance.",
      image: fortunerImage,
      badge: "Premium Choice",
      cta: "Reserve Fortuner"
    },
    {
      name: "Toyota Corolla",
      subtitle: "Elegant & Comfortable",
      description: "Classic choice for sophisticated wedding style.",
      image: corollaImage,
      cta: "Book Corolla"
    },
    {
      name: "Suzuki Alto",
      subtitle: "Budget/Assist",
      description: "Handy for quick errands & guest shuttles.",
      image: altoImage,
      cta: "Book Alto"
    }
  ];

  const planningTips = [
    "Share timelines early for better coordination",
    "Assign a point-of-contact for the day",
    "Allow buffer time for photos and unexpected moments",
    "Confirm pickup locations a day before the event"
  ];

  const faqs = [
    {
      question: "Do you provide décor?",
      answer: "We deliver a décor-ready clean car. Décor can be arranged on request with additional charges."
    },
    {
      question: "What's the chauffeur dress code?",
      answer: "Our chauffeurs dress formally to match the elegance of your wedding day."
    },
    {
      question: "How is waiting/overtime charged?",
      answer: "Overtime is charged hourly after the booked window. We'll inform you of rates upfront."
    },
    {
      question: "Can you handle multiple stops?",
      answer: "Yes, we can accommodate multiple stops. Please share the route in advance for proper planning."
    },
    {
      question: "Is fuel included?",
      answer: "Fuel is typically included for fixed wedding routes. Custom routes are charged by agreement."
    },
    {
      question: "How does payment & booking work?",
      answer: "Advance payment required to reserve your car, with balance due on the event day."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Free cancellation up to 48 hours before the event. Peak dates may have different terms."
    },
    {
      question: "Do you have backup vehicles?",
      answer: "Yes, we maintain standby plans in case of issues and will coordinate immediately if needed."
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
                <BreadcrumbPage>Wedding Cars in Karachi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Wedding Cars in Karachi <br />
                <span className="text-accent">(Chauffeured)</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Make your entrance unforgettable. From the elegant Toyota Fortuner to classic sedans for family and guests—our wedding car service pairs spotless vehicles with punctual, well-dressed chauffeurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi.">
                    Book Wedding Cars
                  </a>
                </Button>
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:+923075777559" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi." className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Wedding Car Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow relative">
                  {pkg.badge && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">
                      {pkg.badge}
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <p className="text-sm text-primary font-medium mb-6">Includes: {pkg.includes}</p>
                    <Button 
                      variant={pkg.badge ? "premium" : "outline"} 
                      className="w-full" 
                      asChild
                    >
                      <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi.">{pkg.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Why Couples Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Cars */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Suggested Wedding Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestedCars.map((car, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={`Wedding car Karachi — ${car.name} ${index === 0 ? 'decorated' : 'rental'}`}
                      className="w-full h-48 object-cover"
                    />
                    {car.badge && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {car.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{car.name}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{car.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{car.description}</p>
                    <Button 
                      variant={car.badge ? "premium" : "outline"} 
                      className="w-full" 
                      asChild
                    >
                      <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi.">{car.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Wedding Planning Tips</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {planningTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "Perfect wedding car service! The Fortuner looked amazing and our driver was so professional. Everything was on time and stress-free."
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— Sarah & Ahmed</cite>
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
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Secure your wedding car now</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi.">
                  Book Online
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-accent hover:bg-gray-100" asChild>
                <a href="tel:+923075777559" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +92 307 5777559</span>
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20wedding%20cars%20in%20Karachi." className="flex items-center space-x-2">
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
              See our <Link to="/toyota-fortuner-rental-karachi" className="text-accent hover:underline">Fortuner feature</Link> • Browse the <Link to="/cars" className="text-primary hover:underline">Fleet</Link> • Check <Link to="/services/city-to-city-car-rental" className="text-primary hover:underline">City-to-City transfers</Link> for guest travel.
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
            "name": "Wedding Car Rental (Karachi)",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RentOnUs",
              "telephone": "+923075777559",
              "address": "Karachi, Pakistan"
            },
            "areaServed": "Karachi",
            "serviceType": "Chauffeured Wedding Cars",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.rentonus.live/services/wedding-cars-karachi"
            }
          })
        }}
      />
    </>
  );
};

export default WeddingCarsKarachiPage;