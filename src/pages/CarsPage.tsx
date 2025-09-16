import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

import fortunerFeatured from "@/assets/fortuner-featured.jpg";
import corollaFeatured from "@/assets/corolla-featured.jpg";
import altoFeatured from "@/assets/alto-featured.jpg";

const CarsPage = () => {
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
      badges: ["Most Popular", "Premium Choice"],
      href: "/toyota-fortuner-rental-karachi",
      priceIndicator: "Premium"
    },
    {
      id: "corolla",
      name: "Toyota Corolla",
      category: "Sedan",
      image: corollaFeatured,
      description: "Reliable sedan ideal for city travel and business meetings",
      features: ["5 Seats", "Automatic", "AC", "Comfortable", "Fuel Efficient"],
      transmission: "automatic",
      seats: 5,
      badges: ["Popular"],
      href: "/cars",
      priceIndicator: "Standard"
    },
    {
      id: "alto",
      name: "Suzuki Alto",
      category: "Economy",
      image: altoFeatured,
      description: "Economy car perfect for daily commutes and short trips",
      features: ["4 Seats", "Manual", "AC", "Economical", "Compact"],
      transmission: "manual",
      seats: 4,
      badges: ["Budget Friendly"],
      href: "/cars",
      priceIndicator: "Economy"
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
              Our Car Rental Fleet
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Choose from our selection of well-maintained, reliable vehicles for every need in Karachi
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="vehicle-card group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.name} rental in Karachi`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 space-y-2">
                      {vehicle.badges.map((badge) => (
                        <Badge 
                          key={badge} 
                          className={`block ${
                            badge === "Most Popular" || badge === "Popular" ? "popular-badge" : 
                            badge === "Premium Choice" ? "featured-badge" :
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
                      <Button variant="cta" size="lg" asChild className="w-full">
                        <Link to={vehicle.href}>
                          {vehicle.id === 'fortuner' ? 'View Fortuner Details' : 'Check Availability'}
                        </Link>
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link to="#booking">Quick Book</Link>
                        </Button>
                        <Button variant="phone" size="sm" asChild className="flex-1">
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
    </div>
  );
};

export default CarsPage;