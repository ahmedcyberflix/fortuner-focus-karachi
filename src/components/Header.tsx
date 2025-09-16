import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  Phone, 
  MessageCircle, 
  Car, 
  Heart, 
  MapPin, 
  Calendar,
  ChevronDown
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Fleet" },
    { href: "/toyota-fortuner-rental-karachi", label: "Fortuner" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/car-rental-karachi", label: "Car Rental", icon: Car },
    { href: "/services/wedding-cars-karachi", label: "Wedding Cars", icon: Heart },
    { href: "/services/city-to-city-car-rental", label: "City-to-City", icon: MapPin },
    { href: "/services/monthly-car-rental", label: "Monthly Rental", icon: Calendar },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary font-heading">RentOnUs</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background border shadow-lg">
                  {serviceLinks.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link to={service.href} className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-accent">
                        <service.icon className="w-4 h-4" />
                        <span>{service.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/cars" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Fleet
              </Link>
              <Link to="/toyota-fortuner-rental-karachi" className="text-sm font-medium text-accent hover:text-accent-light transition-colors font-semibold">
                Fortuner
              </Link>
              <Link to="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="phone" size="sm" asChild>
                <a href="tel:+923075777559" className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a 
                  href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car." 
                  className="flex items-center space-x-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <a href="https://wa.me/+923075777559?text=Hi%20RentOnUs%2C%20I%20want%20to%20book%20a%20car.">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      to={link.href} 
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-4">SERVICES</h4>
                    <div className="space-y-4">
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.href}
                          to={service.href} 
                          className="flex items-center space-x-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <service.icon className="w-5 h-5" />
                          <span>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky WhatsApp CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 pb-[max(12px,env(safe-area-inset-bottom))]">
        <Button 
          variant="cta" 
          size="lg" 
          asChild 
          className="w-full h-14 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.18)] bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-all duration-150"
          aria-label="Book now on WhatsApp"
          onClick={() => {
            // Track analytics event
            try {
              (window as any).gtag?.('event', 'book_now_whatsapp_click', {
                event_category: 'cta',
                event_label: 'mobile_sticky'
              });
            } catch (error) {
              // Ignore analytics errors
            }
          }}
        >
          <a 
            href="https://wa.me/923075777559?text=Hi%20RentOnUs%2C%20I%27d%20like%20to%20book%20a%20car." 
            className="flex items-center justify-center space-x-2 font-semibold text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>BOOK NOW</span>
          </a>
        </Button>
      </div>
    </>
  );
};

export default Header;