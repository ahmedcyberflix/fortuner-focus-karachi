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
  MapPin, 
  Clock, 
  Car, 
  MessageCircle, 
  Shield,
  Phone,
  Star,
  CheckCircle,
  Users,
  Briefcase,
  Plane,
  Building2
} from "lucide-react";
import fortunerImage from "@/assets/fortuner-featured.jpg";
import corollaImage from "@/assets/corolla-featured.jpg";
import altoImage from "@/assets/alto-featured.jpg";

const CityToCityCarRentalPage = () => {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  const bestFor = [
    { icon: Users, label: "Family trips" },
    { icon: Briefcase, label: "Business travel" },
    { icon: Plane, label: "Airport transfers" },
    { icon: Building2, label: "Weddings in other cities" },
    { icon: Building2, label: "Hospital visits" }
  ];

  const recommendedVehicles = [
    {
      name: "Toyota Fortuner",
      subtitle: "Families / Long Routes",
      description: "Powerful AC, luggage space, comfortable for highways.",
      image: fortunerImage,
      badge: "Highway Choice",
      cta: "Book Fortuner"
    },
    {
      name: "Toyota Corolla",
      subtitle: "Comfort & Value",
      description: "Smooth inter-city ride with excellent comfort.",
      image: corollaImage,
      cta: "Book Corolla"
    },
    {
      name: "Suzuki Alto",
      subtitle: "Budget Option",
      description: "Economical choice for shorter routes.",
      image: altoImage,
      cta: "Book Alto"
    }
  ];

  const sampleRoutes = [
    { route: "Karachi ↔ Hyderabad", price: "Contact for Quote" },
    { route: "Karachi ↔ Sukkur", price: "Contact for Quote" },
    { route: "Karachi ↔ Lahore", price: "Contact for Quote" },
    { route: "Custom route", price: "Get a Quote" }
  ];

  const whatIsIncluded = [
    "Professional driver with highway experience",
    "Clean, well-maintained vehicle",
    "Standard waiting time at stops",
    "Tolls/parking as per actuals (or included if packaged)",
    "Night travel upon request and safety assessment"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Share your requirements",
      description: "Tell us cities, dates, passengers, and luggage needs."
    },
    {
      step: "2",
      title: "Receive fixed quote",
      description: "Get transparent pricing and travel plan details."
    },
    {
      step: "3",
      title: "Enjoy safe journey",
      description: "On-time departure with comfortable, reliable travel."
    }
  ];

  const faqs = [
    {
      question: "Are fuel & tolls included?",
      answer: "Usually paid by customer per actuals unless packaged. We provide transparent estimates upfront."
    },
    {
      question: "Do you offer night driving?",
      answer: "Yes, available upon request. We consider safety and driver rest requirements for night travel."
    },
    {
      question: "Can you handle multiple stops?",
      answer: "Yes, we accommodate multiple stops. Please share your complete itinerary for an accurate quote."
    },
    {
      question: "What about outstation driver meals/accommodation?",
      answer: "Customer provides or pays a fixed allowance for driver meals and accommodation on long trips."
    },
    {
      question: "Are there luggage limits?",
      answer: "Limits based on car type. Tell us your luggage volume so we can match the right vehicle."
    },
    {
      question: "Can I specifically choose Fortuner?",
      answer: "Yes, subject to availability. We recommend booking early for preferred vehicle selection."
    },
    {
      question: "Payment & invoices?",
      answer: "Cash or bank transfer accepted. Corporate invoicing available for business clients."
    },
    {
      question: "Can I reschedule or cancel?",
      answer: "Allowed with advance notice. Terms vary by route and date - please check when booking."
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
                <BreadcrumbPage>City-to-City Car Rental</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                City-to-City Car Rental <br />
                <span className="text-primary">(From Karachi)</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Travel anywhere from Karachi—Hyderabad, Sukkur, Multan, Lahore and beyond—with experienced highway chauffeurs and reliable cars. Fixed routes, clear pricing, and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20city-to-city%20car%20rental%20from%20Karachi.">
                    Get Quote
                  </a>
                </Button>
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:+923075777559" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20city-to-city%20car%20rental%20from%20Karachi." className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Best For Chips */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Best For</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {bestFor.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-muted px-6 py-3 rounded-full border">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Vehicles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Recommended Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedVehicles.map((vehicle, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={`${index === 0 ? 'Karachi to Hyderabad car rental — Fortuner highway' : `Inter-city ${vehicle.name.includes('Corolla') ? 'sedan' : 'car'} rental Karachi`}`}
                      className="w-full h-48 object-cover"
                    />
                    {vehicle.badge && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
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
                      <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20city-to-city%20car%20rental%20from%20Karachi.">{vehicle.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Routes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Sample Routes</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sampleRoutes.map((route, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{route.route}</h3>
                        <p className="text-sm text-primary font-medium">{route.price}</p>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20a%20quote%20for%20city-to-city%20travel%20from%20Karachi.">
                          {index === 3 ? "Get Custom Quote" : "Get Quote"}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">What's Included</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatIsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "Excellent service for our Karachi to Lahore trip. The driver was experienced and the Fortuner was perfect for our family journey. Highly recommended!"
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— M. Hassan</cite>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
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
            <h2 className="text-3xl font-bold mb-6 font-heading">Get a city-to-city quote now</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20city-to-city%20car%20rental%20from%20Karachi.">
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
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20city-to-city%20car%20rental%20from%20Karachi." className="flex items-center space-x-2">
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
              See <Link to="/toyota-fortuner-rental-karachi" className="text-accent hover:underline">Fortuner for long-route comfort</Link> • Explore <Link to="/services/monthly-car-rental" className="text-primary hover:underline">Monthly Rental</Link> if staying longer in another city.
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
            "name": "City-to-City Car Rental from Karachi",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RentOnUs",
              "telephone": "+923075777559",
              "address": "Karachi, Pakistan"
            },
            "areaServed": "Pakistan",
            "serviceType": "Outstation Chauffeur Car Rental",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.rentonus.live/services/city-to-city-car-rental"
            }
          })
        }}
      />
    </>
  );
};

export default CityToCityCarRentalPage;