import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Car,
  Facebook,
  Instagram
} from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "030-7577-7559",
      action: "tel:03075777559",
      buttonText: "Call Now",
      buttonVariant: "phone" as const,
      availability: "Available 24/7"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat for instant responses",
      value: "030-7577-7559",
      action: "https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20contact%20you.",
      buttonText: "Chat on WhatsApp",
      buttonVariant: "whatsapp" as const,
      availability: "Fast response guaranteed"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed inquiries",
      value: "info@rentonus.live",
      action: "mailto:info@rentonus.live",
      buttonText: "Send Email",
      buttonVariant: "outline" as const,
      availability: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in Karachi",
      value: "Karachi, Pakistan",
      action: "#location",
      buttonText: "View Map",
      buttonVariant: "outline" as const,
      availability: "Serving all areas"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/rentonus",
      description: "Follow us for updates and offers"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/rentonus",
      description: "See our latest fleet photos"
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact RentOnUs
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Get in touch with us for car rentals, inquiries, or support. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to contact us. We're ready to assist with your car rental needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="trust-card text-center group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <method.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.availability}</p>
                  </div>
                  <Button variant={method.buttonVariant} size="lg" asChild className="w-full">
                    <a href={method.action}>{method.buttonText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Book a Car Online
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out our booking form and we'll contact you within minutes to confirm your reservation.
                </p>
              </div>
              <BookingForm />
            </div>
            
            {/* Business Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-accent" />
                    <span>Business Hours</span>
                  </CardTitle>
                  <CardDescription>
                    When you can reach us for support and bookings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Services Quick Links */}
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="w-6 h-6 text-accent" />
                    <span>Quick Service Links</span>
                  </CardTitle>
                  <CardDescription>
                    Direct access to our most popular services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="lg" asChild className="w-full justify-start">
                    <Link to="/toyota-fortuner-rental-karachi">
                      Book Toyota Fortuner
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start">
                    <Link to="/services/wedding-cars-karachi">
                      Wedding Car Rental
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start">
                    <Link to="/services/monthly-car-rental">
                      Monthly Car Rental
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start">
                    <Link to="/cars">
                      View All Cars
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest fleet and offers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => (
                    <div key={social.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20" id="location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're based in Karachi and serve customers across the city and surrounding areas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="trust-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        RentOnUs Car Rental
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <p className="font-medium text-foreground">Address</p>
                            <p className="text-muted-foreground">Karachi, Pakistan</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <p className="font-medium text-foreground">Phone</p>
                            <p className="text-muted-foreground">030-7577-7559</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <p className="font-medium text-foreground">Email</p>
                            <p className="text-muted-foreground">info@rentonus.live</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-2">Service Areas</h4>
                      <p className="text-muted-foreground">
                        We provide car rental services throughout Karachi including all major areas:
                        DHA, Clifton, Gulshan, Nazimabad, North Nazimabad, PECHS, and beyond.
                        Outstation travel available to all major cities in Pakistan.
                      </p>
                    </div>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="bg-muted rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="w-16 h-16 text-muted-foreground mx-auto" />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          Interactive Map
                        </h4>
                        <p className="text-muted-foreground">
                          Coming Soon - Google Maps Integration
                        </p>
                      </div>
                      <Button variant="outline" asChild>
                        <a href="https://maps.google.com/search/Karachi+car+rental" target="_blank" rel="noopener noreferrer">
                          View on Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;