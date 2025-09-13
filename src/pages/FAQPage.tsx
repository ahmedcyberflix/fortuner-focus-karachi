import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, 
  MessageCircle, 
  Car, 
  CreditCard, 
  Shield, 
  MapPin,
  Clock,
  Users,
  Fuel,
  HelpCircle
} from "lucide-react";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Booking & Reservations",
      icon: Car,
      faqs: [
        {
          question: "How do I book a car with RentOnUs?",
          answer: "You can book a car in three easy ways: 1) Fill out our online booking form on the website, 2) Call us directly at 030-7577-7559, or 3) Message us on WhatsApp. We'll confirm your booking within minutes and provide all the details you need."
        },
        {
          question: "How far in advance should I book?",
          answer: "For regular bookings, we recommend booking at least 24 hours in advance to ensure availability. For wedding cars and peak seasons (holidays, events), we suggest booking 1-2 weeks ahead. However, we also accommodate last-minute bookings subject to availability."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer: "Yes, you can modify or cancel your booking. Please contact us as soon as possible. Modifications are subject to availability, and cancellation policies vary based on how far in advance you cancel. Contact us for specific terms."
        },
        {
          question: "Do you provide instant confirmation?",
          answer: "Yes! We provide quick confirmation within minutes of your booking request. You'll receive confirmation via call, WhatsApp, or SMS with all booking details including pickup time, location, and driver information (if applicable)."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: CreditCard,
      faqs: [
        {
          question: "What are your rental rates?",
          answer: "Our rates vary based on the vehicle type, rental duration, and whether you need a driver. We offer competitive daily, weekly, and monthly rates. Contact us for a personalized quote based on your specific needs. All pricing is transparent with no hidden charges."
        },
        {
          question: "Are there any hidden charges?",
          answer: "No, we believe in transparent pricing. All costs are discussed upfront including any additional charges for overtime, outstation travel, or extra services. You'll know exactly what you're paying before confirming your booking."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash payments, bank transfers, and mobile payments. A security deposit may be required depending on the rental type and duration. Payment terms will be clearly explained during booking confirmation."
        },
        {
          question: "Do you offer discounts for long-term rentals?",
          answer: "Yes! We offer attractive discounts for weekly and monthly rentals. The longer the rental period, the better the rates. Contact us to discuss custom packages for extended rentals or corporate accounts."
        }
      ]
    },
    {
      title: "Vehicle & Driver Requirements",
      icon: Shield,
      faqs: [
        {
          question: "What documents do I need for self-drive rental?",
          answer: "For self-drive rentals, you need: 1) Valid CNIC (original), 2) Valid driving license (original), 3) Security deposit. For outstation travel, additional documentation may be required. All documents are returned after the rental period."
        },
        {
          question: "What's the minimum age for renting a car?",
          answer: "The minimum age for self-drive rental is 21 years with a valid driving license. For rentals with our professional drivers, passengers of any age are welcome. Additional verification may be required for younger renters."
        },
        {
          question: "Do you provide professional drivers?",
          answer: "Yes! We have experienced, professional drivers available for all our vehicles. Our drivers are familiar with Karachi routes, traffic patterns, and are trained in customer service. Driver costs are separate from vehicle rental charges."
        },
        {
          question: "Are your vehicles insured?",
          answer: "Yes, all our vehicles are fully insured for your safety and peace of mind. However, renters are responsible for any damage due to negligence or violation of rental terms. We'll explain all insurance details during booking."
        }
      ]
    },
    {
      title: "Service Areas & Travel",
      icon: MapPin,
      faqs: [
        {
          question: "Which areas of Karachi do you serve?",
          answer: "We serve all areas of Karachi including DHA, Clifton, Gulshan, Nazimabad, North Nazimabad, PECHS, Korangi, Malir, and all other major localities. Pickup and drop-off services are available throughout the city."
        },
        {
          question: "Can I take the car outside Karachi?",
          answer: "Yes, outstation travel is allowed with advance notice. We serve routes to Hyderabad, Sukkur, Lahore, Islamabad, and other major cities. Additional charges apply for outstation travel, and driver accommodation costs are borne by the customer for overnight trips."
        },
        {
          question: "Do you provide airport pickup/drop-off?",
          answer: "Absolutely! We provide reliable airport pickup and drop-off services from Jinnah International Airport. Our drivers monitor flight schedules and are experienced with airport procedures for hassle-free transfers."
        },
        {
          question: "What if I need to extend my rental period?",
          answer: "Extensions are possible subject to vehicle availability. Contact us as early as possible to arrange extensions. Additional charges will apply based on our standard rates, and the same terms and conditions will continue to apply."
        }
      ]
    },
    {
      title: "Vehicle Specifications & Fuel",
      icon: Fuel,
      faqs: [
        {
          question: "Who is responsible for fuel costs?",
          answer: "Fuel costs are the customer's responsibility. Vehicles are provided with a reasonable amount of fuel, and customers are expected to return the vehicle with the same fuel level. Fuel policy details are provided at the time of booking."
        },
        {
          question: "What if the car breaks down during my rental?",
          answer: "In the unlikely event of a breakdown, contact us immediately. We provide 24/7 support and will arrange for roadside assistance or a replacement vehicle as quickly as possible. Your safety and convenience are our top priorities."
        },
        {
          question: "Are your cars regularly maintained?",
          answer: "Yes, all our vehicles undergo regular maintenance and safety checks. We ensure our fleet is in excellent condition with proper AC, clean interiors, and all safety features functioning properly before each rental."
        },
        {
          question: "Can I request specific car features?",
          answer: "We'll do our best to accommodate specific requests such as automatic transmission, specific colors, or particular models. However, availability varies, so we recommend booking early and discussing your preferences during the booking process."
        }
      ]
    },
    {
      title: "Special Services",
      icon: Users,
      faqs: [
        {
          question: "Do you provide wedding car decorations?",
          answer: "Yes, we can arrange wedding car decorations including flowers, ribbons, and traditional decorative elements. This service can be arranged in advance for an additional cost. Let us know your preferences when booking."
        },
        {
          question: "Do you offer corporate rental packages?",
          answer: "Yes, we provide customized corporate rental solutions for businesses, including monthly packages, multiple vehicle rentals, and dedicated account management. Contact us to discuss your corporate transportation needs."
        },
        {
          question: "Can I rent multiple cars for an event?",
          answer: "Absolutely! We can arrange multiple vehicles for weddings, corporate events, or group travel. Advance booking is recommended for multiple vehicle requirements, and we can offer package pricing for such arrangements."
        },
        {
          question: "Do you provide chauffeur services for special occasions?",
          answer: "Yes, our professional chauffeurs are experienced in providing premium service for weddings, corporate events, and special occasions. They're trained in professional etiquette and customer service excellence."
        }
      ]
    }
  ];

  const quickContact = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Immediate assistance",
      action: "tel:03075777559",
      actionText: "030-7577-7559"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat support",
      action: "https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20have%20a%20question.",
      actionText: "Chat Now"
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
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our car rental services in Karachi
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Can't Find Your Answer?
              </h2>
              <p className="text-muted-foreground">
                Contact us directly for personalized assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickContact.map((contact) => (
                <Card key={contact.title} className="trust-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                      <Button 
                        variant={contact.title === "Call Us" ? "phone" : "whatsapp"} 
                        asChild
                      >
                        <a href={contact.action}>{contact.actionText}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <Card className="trust-card">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-b last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/5">
                            <span className="font-medium text-foreground pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team is ready to help with any specific questions about your car rental needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="trust-card">
                <CardHeader className="text-center">
                  <Clock className="w-10 h-10 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">Quick Response</CardTitle>
                  <CardDescription>
                    Get answers within minutes via call or WhatsApp
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="trust-card">
                <CardHeader className="text-center">
                  <Users className="w-10 h-10 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">Expert Advice</CardTitle>
                  <CardDescription>
                    Our experienced team provides personalized recommendations
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="trust-card">
                <CardHeader className="text-center">
                  <Shield className="w-10 h-10 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">Reliable Support</CardTitle>
                  <CardDescription>
                    24/7 assistance for all your rental needs and emergencies
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="cta" size="lg" asChild>
                <Link to="/#booking">Book Your Car Now</Link>
              </Button>
              <Button variant="phone" size="lg" asChild>
                <a href="tel:03075777559">
                  <Phone className="w-5 h-5" />
                  Call for Help
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20have%20a%20question%20about%20car%20rental.">
                  <MessageCircle className="w-5 h-5" />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;