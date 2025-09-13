import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Fleet" },
    { href: "/toyota-fortuner-rental-karachi", label: "Toyota Fortuner" },
    { href: "/services/car-rental-karachi", label: "Car Rental" },
    { href: "/services/wedding-cars-karachi", label: "Wedding Cars" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-lg">
                <Car className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold font-heading">RentOnUs</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Reliable, affordable car rentals in Karachi. Self-drive or with driver. 
              Daily, monthly, weddings & city-to-city transport.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:03075777559" className="hover:text-accent transition-colors">
                  030-7577-7559
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@rentonus.live" className="hover:text-accent transition-colors">
                  info@rentonus.live
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Our Services</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>• Car Rental in Karachi</p>
              <p>• Wedding Car Rentals</p>
              <p>• City-to-City Transport</p>
              <p>• Monthly Car Rental</p>
              <p>• Self-Drive Options</p>
              <p>• Professional Drivers</p>
              <p>• Airport Transfers</p>
              <p>• Corporate Rentals</p>
            </div>
          </div>

          {/* Map & Social */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Location & Social</h3>
            
            {/* Google Map Embed */}
            <div className="bg-secondary rounded-lg p-4 mb-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Karachi, Pakistan</p>
                  <p className="text-xs">Google Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/rentonus" 
                  className="flex items-center justify-center w-8 h-8 bg-accent rounded-full text-accent-foreground hover:bg-accent-light transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/rentonus" 
                  className="flex items-center justify-center w-8 h-8 bg-accent rounded-full text-accent-foreground hover:bg-accent-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2025 RentOnUs. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;