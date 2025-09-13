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
  Calendar, 
  Wrench, 
  Car, 
  MessageCircle, 
  Shield,
  Phone,
  Star,
  CheckCircle,
  Users,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  FileText
} from "lucide-react";
import fortunerImage from "@/assets/fortuner-featured.jpg";
import corollaImage from "@/assets/corolla-featured.jpg";
import altoImage from "@/assets/alto-featured.jpg";

const MonthlyCarRentalPage = () => {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  const planHighlights = [
    {
      icon: DollarSign,
      title: "Discounted monthly rates",
      description: "Better value for longer commitments"
    },
    {
      icon: Wrench,
      title: "Maintenance included",
      description: "Regular checks & servicing covered"
    },
    {
      icon: Car,
      title: "Replacement car support",
      description: "Backup vehicle when available"
    },
    {
      icon: Users,
      title: "Dedicated account support",
      description: "Personal assistance throughout"
    },
    {
      icon: FileText,
      title: "Simple monthly invoicing",
      description: "Clear billing & corporate options"
    }
  ];

  const fleetSuggestions = [
    {
      name: "Toyota Fortuner",
      subtitle: "Premium Long-Term Mobility",
      description: "Executive comfort for families & business leaders who need reliable luxury transport.",
      image: fortunerImage,
      badge: "Executive Choice",
      cta: "Get Fortuner Quote"
    },
    {
      name: "Toyota Corolla",
      subtitle: "Comfort for Daily Commutes",
      description: "Perfect balance of comfort and efficiency for regular office commutes.",
      image: corollaImage,
      cta: "Get Corolla Quote"
    },
    {
      name: "Suzuki Alto",
      subtitle: "Cost-Efficient City Runabout",
      description: "Most economical option for daily city travel and short trips.",
      image: altoImage,
      cta: "Get Alto Quote"
    }
  ];

  const whatIsIncluded = [
    "Scheduled maintenance checks",
    "Standard insurance coverage (if applicable)",
    "24/7 assistance hotline",
    "Basic cleanliness on handover/return",
    "Fuel responsibility with customer"
  ];

  const addOns = [
    "Chauffeur service (part-time or full-time)",
    "Additional driver authorization",
    "Extended insurance coverage",
    "Airport pickup/drop service",
    "In-car accessories (phone mount, charger)"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Share your requirements",
      description: "Tell us duration, mileage, routes, and car preferences."
    },
    {
      step: "2",
      title: "Get tailored proposal",
      description: "We propose the best plan & car options for your needs."
    },
    {
      step: "3",
      title: "Start your rental",
      description: "Sign simple agreement and begin your monthly rental."
    }
  ];

  const faqs = [
    {
      question: "How does billing cycle & deposit work?",
      answer: "Monthly billing in advance with a refundable security deposit. Amount varies by vehicle type and duration."
    },
    {
      question: "Are there mileage limits?",
      answer: "Based on your selected plan. Unlimited mileage available for certain cases - discuss during booking."
    },
    {
      question: "Self-drive vs with driver options?",
      answer: "Both options available. You can choose self-drive for independence or chauffeur service for convenience."
    },
    {
      question: "How do you handle maintenance & breakdowns?",
      answer: "We handle all scheduled maintenance. 24/7 hotline for assistance with replacement vehicles available when needed."
    },
    {
      question: "Can I swap vehicles during the rental?",
      answer: "Vehicle swaps possible with advance notice if your needs change during the rental period."
    },
    {
      question: "Do you provide corporate invoicing?",
      answer: "Yes, we provide corporate invoicing with PO numbers and GST as required for business clients."
    },
    {
      question: "What if I need to return early?",
      answer: "Early returns handled with pro-rata adjustments as per the rental agreement terms."
    },
    {
      question: "Are there discounts for longer than 3 months?",
      answer: "Yes, ask about our extended-term discounts for rentals longer than 3 months."
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
                <BreadcrumbPage>Monthly Car Rental</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Monthly Car Rental in Karachi <br />
                <span className="text-primary">(Long-Term Plans)</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Need a car for a month or more? Get predictable costs, priority support, and maintenance handled. Ideal for expats, project teams, and corporate staff—choose from Alto, Corolla, and Fortuner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20inquire%20about%20monthly%20car%20rental%20in%20Karachi.">
                    Get Monthly Plan
                  </a>
                </Button>
                <Button variant="phone" size="lg" asChild>
                  <a href="tel:+923075777559" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20inquire%20about%20monthly%20car%20rental%20in%20Karachi." className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Plan Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {planHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Suggestions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-heading">Fleet Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fleetSuggestions.map((vehicle, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={`Monthly car rental Karachi — ${vehicle.name} ${index === 0 ? 'executive' : index === 1 ? 'office commute' : 'economy'}`}
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
                      <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20inquire%20about%20monthly%20car%20rental%20in%20Karachi.">{vehicle.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included & Add-Ons */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 font-heading">What's Included</h2>
                <div className="space-y-4">
                  {whatIsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-Ons */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 font-heading">Optional Add-Ons</h2>
                <div className="space-y-4">
                  {addOns.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monthly rates vary by model, duration & usage requirements. We provide customized quotes based on your specific needs for the most accurate pricing.
              </p>
              <p className="text-muted-foreground">
                Share your requirements with us to receive a tailored quote that matches your budget and mobility needs.
              </p>
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
                "Perfect for our 6-month project in Karachi. The Corolla was reliable, maintenance was handled seamlessly, and the monthly billing made budgeting easy."
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— Corporate Client</cite>
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
            <h2 className="text-3xl font-bold mb-6 font-heading">Start your monthly plan today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20inquire%20about%20monthly%20car%20rental%20in%20Karachi.">
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
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20inquire%20about%20monthly%20car%20rental%20in%20Karachi." className="flex items-center space-x-2">
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
              See <Link to="/cars" className="text-primary hover:underline">Fleet</Link> • Consider the <Link to="/toyota-fortuner-rental-karachi" className="text-accent hover:underline">Fortuner for executive comfort</Link> • Need inter-city travel? Visit <Link to="/services/city-to-city-car-rental" className="text-primary hover:underline">City-to-City</Link>.
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
            "name": "Monthly Car Rental in Karachi",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RentOnUs",
              "telephone": "+923075777559",
              "address": "Karachi, Pakistan"
            },
            "areaServed": "Karachi",
            "serviceType": "Long-term Car Rental",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.rentonus.live/services/monthly-car-rental"
            }
          })
        }}
      />
    </>
  );
};

export default MonthlyCarRentalPage;