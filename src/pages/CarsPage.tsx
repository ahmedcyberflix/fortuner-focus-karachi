import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Filter } from "lucide-react";

import fortunerFeatured from "@/assets/fortuner-featured.jpg";
import corollaFeatured from "@/assets/corolla-featured.jpg";
import altoFeatured from "@/assets/alto-featured.jpg";

// Analytics tracking
const trackEvent = (eventName: string, properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
};

const CarsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSeats, setSelectedSeats] = useState<string>("all");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("all");
  const [selectedDriver, setSelectedDriver] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");

  const vehicles = [
    {
      id: "fortuner",
      name: "Toyota Fortuner",
      category: "SUV",
      image: fortunerFeatured,
      description: "7-seater luxury SUV perfect for families and outstation trips",
      features: ["7 Seats", "Automatic", "AC", "Luxury", "4WD"],
      transmission: "automatic",
      seats: 7,
      luggage: "Large",
      badges: ["Most Popular", "Premium Choice"],
      href: "/toyota-fortuner-rental-karachi",
      priceIndicator: "Premium",
      popularity: 10,
      alt: "Toyota Fortuner 7-seater SUV rental in Karachi - luxury family vehicle with 4WD and automatic transmission"
    },
    {
      id: "alto",
      name: "Suzuki Alto",
      category: "Economy",
      image: altoFeatured,
      description: "Economy car perfect for daily commutes and short trips",
      features: ["4 Seats", "Automatic", "AC", "Compact", "Fuel-Efficient"],
      transmission: "automatic",
      seats: 4,
      luggage: "Small",
      badges: ["Budget Friendly"],
      href: "/cars",
      priceIndicator: "Economy",
      popularity: 8,
      alt: "Suzuki Alto automatic economy car rental in Karachi - fuel-efficient compact vehicle for city travel"
    },
    {
      id: "corolla",
      name: "Toyota Corolla",
      category: "Standard",
      image: corollaFeatured,
      description: "Reliable sedan ideal for city travel and business meetings",
      features: ["5 Seats", "Automatic", "AC", "Comfortable", "Fuel Efficient"],
      transmission: "automatic",
      seats: 5,
      luggage: "Medium",
      badges: ["Popular"],
      href: "/cars",
      priceIndicator: "Standard",
      popularity: 9,
      alt: "Toyota Corolla sedan rental in Karachi - reliable automatic car for business and city travel"
    },
    {
      id: "civic",
      name: "Honda Civic",
      category: "Standard",
      image: corollaFeatured, // Placeholder - will be replaced with actual image
      description: "Stylish sedan with modern features and excellent fuel economy",
      features: ["5 Seats", "Automatic", "AC", "Stylish", "Modern"],
      transmission: "automatic",
      seats: 5,
      luggage: "Medium",
      badges: [],
      href: "/cars",
      priceIndicator: "Standard",
      popularity: 7,
      alt: "Honda Civic sedan rental in Karachi - stylish automatic car with modern features"
    },
    {
      id: "mercedes-e-class",
      name: "Mercedes E-Class",
      category: "Luxury",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "Premium luxury sedan for executive travel and special occasions",
      features: ["5 Seats", "Automatic", "AC", "Luxury", "Premium"],
      transmission: "automatic",
      seats: 5,
      luggage: "Large",
      badges: ["Luxury"],
      href: "/cars",
      priceIndicator: "Luxury",
      popularity: 6,
      alt: "Mercedes E-Class luxury sedan rental in Karachi - premium executive car with automatic transmission"
    },
    {
      id: "audi-a6",
      name: "Audi A6",
      category: "Luxury",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "Sophisticated luxury sedan with cutting-edge technology",
      features: ["5 Seats", "Automatic", "AC", "Luxury", "Technology"],
      transmission: "automatic",
      seats: 5,
      luggage: "Large",
      badges: ["Luxury"],
      href: "/cars",
      priceIndicator: "Luxury",
      popularity: 5,
      alt: "Audi A6 luxury sedan rental in Karachi - sophisticated automatic car with premium technology"
    },
    {
      id: "honda-brv",
      name: "Honda BR-V",
      category: "SUV",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "Compact 7-seater SUV perfect for family adventures",
      features: ["7 Seats", "Automatic", "AC", "Family", "Compact SUV"],
      transmission: "automatic",
      seats: 7,
      luggage: "Medium",
      badges: [],
      href: "/cars",
      priceIndicator: "Standard",
      popularity: 6,
      alt: "Honda BR-V 7-seater SUV rental in Karachi - compact family vehicle with automatic transmission"
    },
    {
      id: "changan-karvaan",
      name: "Changan Karvaan",
      category: "MPV",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "Spacious 7-seater MPV ideal for group travel and families",
      features: ["7 Seats", "Manual", "AC", "Spacious", "Group Travel"],
      transmission: "manual",
      seats: 7,
      luggage: "Large",
      badges: [],
      href: "/cars",
      priceIndicator: "Standard",
      popularity: 4,
      alt: "Changan Karvaan 7-seater MPV rental in Karachi - spacious family vehicle for group travel"
    },
    {
      id: "land-cruiser",
      name: "Toyota Land Cruiser",
      category: "SUV",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "Premium 7-seater SUV for luxury travel and off-road adventures",
      features: ["7 Seats", "Automatic", "AC", "Luxury", "Off-Road"],
      transmission: "automatic",
      seats: 7,
      luggage: "Large",
      badges: ["Luxury"],
      href: "/cars",
      priceIndicator: "Luxury",
      popularity: 7,
      alt: "Toyota Land Cruiser 7-seater luxury SUV rental in Karachi - premium off-road vehicle with automatic transmission"
    },
    {
      id: "hiace",
      name: "Toyota HiAce",
      category: "Van",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "13-seater van perfect for group transportation and events",
      features: ["13 Seats", "Manual", "AC", "Group Transport", "Events"],
      transmission: "manual",
      seats: 13,
      luggage: "Extra Large",
      badges: [],
      href: "/cars",
      priceIndicator: "Premium",
      popularity: 3,
      alt: "Toyota HiAce 13-seater van rental in Karachi - group transportation vehicle for events and large groups"
    },
    {
      id: "coaster",
      name: "Toyota Coaster",
      category: "Bus",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "25-seater bus ideal for corporate events and large group travel",
      features: ["25 Seats", "Manual", "AC", "Corporate", "Large Groups"],
      transmission: "manual",
      seats: 25,
      luggage: "Extra Large",
      badges: [],
      href: "/cars",
      priceIndicator: "Premium",
      popularity: 2,
      alt: "Toyota Coaster 25-seater bus rental in Karachi - corporate transportation for large groups and events"
    },
    {
      id: "armored-vehicle",
      name: "Armored Vehicle",
      category: "Armored",
      image: fortunerFeatured, // Placeholder - will be replaced with actual image
      description: "High-security armored vehicle for VIP protection (Enquiry only)",
      features: ["Armored", "Security", "VIP", "Protection", "Enquiry Only"],
      transmission: "automatic",
      seats: 4,
      luggage: "Medium",
      badges: ["Enquiry Only"],
      href: "/cars",
      priceIndicator: "Enquiry",
      popularity: 1,
      alt: "Armored security vehicle rental in Karachi - VIP protection and high-security transportation"
    }
  ];

  // Filter and sort vehicles
  const filteredAndSortedVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      if (selectedCategory !== "all" && vehicle.category !== selectedCategory) return false;
      if (selectedSeats !== "all" && vehicle.seats.toString() !== selectedSeats) return false;
      if (selectedTransmission !== "all" && vehicle.transmission !== selectedTransmission) return false;
      // Note: WithDriver filter would be implemented with booking system integration
      return true;
    });

    // Sort vehicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return b.popularity - a.popularity;
        case "seats":
          return a.seats - b.seats;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return b.popularity - a.popularity;
      }
    });

    return filtered;
  }, [selectedCategory, selectedSeats, selectedTransmission, selectedDriver, sortBy]);

  const handleCardView = (vehicle: any) => {
    trackEvent('vehicle_card_view', {
      model: vehicle.name,
      category: vehicle.category,
      seats: vehicle.seats
    });
  };

  const handleCTAClick = (vehicle: any, action: string) => {
    trackEvent('vehicle_card_cta_click', {
      model: vehicle.name,
      action: action,
      category: vehicle.category
    });
  };

  return (
    <>
      <title>Car Rental Fleet in Karachi | RentOnUs - Premium Vehicle Selection</title>
      <meta name="description" content="Browse our complete car rental fleet in Karachi. From economy cars to luxury SUVs, 7-seaters to buses. Toyota Fortuner, Corolla, Mercedes, Audi & more available for rent." />
      
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
                <BreadcrumbPage>Fleet</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Our Complete Car Rental Fleet
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Choose from our selection of well-maintained, reliable vehicles for every need in Karachi
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filter by:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Economy">Economy</SelectItem>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                    <SelectItem value="MPV">MPV</SelectItem>
                    <SelectItem value="Van">Van</SelectItem>
                    <SelectItem value="Bus">Bus</SelectItem>
                    <SelectItem value="Armored">Armored</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSeats} onValueChange={setSelectedSeats}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue placeholder="Seats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Seats</SelectItem>
                    <SelectItem value="4">4 Seats</SelectItem>
                    <SelectItem value="5">5 Seats</SelectItem>
                    <SelectItem value="7">7 Seats</SelectItem>
                    <SelectItem value="13">13 Seats</SelectItem>
                    <SelectItem value="25">25 Seats</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                  <SelectTrigger className="w-full sm:w-36">
                    <SelectValue placeholder="Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-36">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="seats">Seats</SelectItem>
                    <SelectItem value="name">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredAndSortedVehicles.length} of {vehicles.length} vehicles
            </div>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedVehicles.map((vehicle) => (
                <Card 
                  key={vehicle.id} 
                  className="vehicle-card group overflow-hidden"
                  onMouseEnter={() => handleCardView(vehicle)}
                >
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 space-y-2">
                      {vehicle.badges.map((badge) => (
                        <Badge 
                          key={badge} 
                          className={`block ${
                            badge === "Most Popular" || badge === "Popular" ? "popular-badge" : 
                            badge === "Premium Choice" ? "featured-badge" :
                            badge === "Luxury" ? "featured-badge" :
                            badge === "Enquiry Only" ? "bg-muted text-muted-foreground" :
                            "bg-success text-success-foreground"
                          }`}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {vehicle.priceIndicator}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{vehicle.category}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{vehicle.seats}</span>
                      </div>
                    </div>
                    <CardDescription>{vehicle.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="cta" 
                        size="lg" 
                        asChild 
                        className="w-full"
                        onClick={() => handleCTAClick(vehicle, 'check_availability')}
                      >
                        <Link to={vehicle.href}>
                          {vehicle.id === 'fortuner' ? 'View Fortuner Details' : 
                           vehicle.id === 'armored-vehicle' ? 'Enquire Now' : 'Check Availability'}
                        </Link>
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild 
                          className="flex-1"
                          onClick={() => handleCTAClick(vehicle, 'quick_book')}
                        >
                          <a 
                            href={`https://wa.me/923075777559?text=Hi%20RentOnUs%2C%20I%27d%20like%20to%20book%20the%20${vehicle.name}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Quick Book
                          </a>
                        </Button>
                        <Button 
                          variant="phone" 
                          size="sm" 
                          asChild 
                          className="flex-1"
                          onClick={() => handleCTAClick(vehicle, 'call')}
                        >
                          <a href="tel:03075777559">Call</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Need Help Choosing the Right Car?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team is here to help you find the perfect vehicle for your needs in Karachi
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="tel:03075777559">Call for Recommendations</a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20need%20help%20choosing%20a%20car.">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Car Rental Fleet - RentOnUs Karachi",
              "description": "Complete car rental fleet in Karachi featuring economy cars to luxury vehicles",
              "itemListElement": filteredAndSortedVehicles.slice(0, 5).map((vehicle, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": vehicle.name,
                "description": vehicle.description,
                "category": vehicle.category,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "areaServed": "Karachi, Pakistan"
                }
              }))
            })
          }}
        />
      </div>
    </>
  );
};

export default CarsPage;