import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Car, CheckCircle } from "lucide-react";

interface BookingFormProps {
  preselectedCar?: string;
  className?: string;
}

const BookingForm = ({ preselectedCar, className }: BookingFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    withDriver: true,
    preferredCar: preselectedCar || "",
    notes: "",
    // Hidden UTM fields
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const carOptions = [
    "Toyota Fortuner (7-seater SUV)",
    "Toyota Corolla (Sedan)",
    "Suzuki Alto (Economy)",
    "Other (Please specify in notes)",
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you shortly to confirm your reservation.",
      });
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickupDate: "",
          pickupTime: "",
          dropoffDate: "",
          dropoffTime: "",
          pickupLocation: "",
          dropoffLocation: "",
          withDriver: true,
          preferredCar: preselectedCar || "",
          notes: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_term: "",
          utm_content: "",
        });
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className={`trust-card ${className}`}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-success-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground mb-4">
                We've received your booking request and will contact you shortly to confirm your reservation.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Contact us now:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="phone" size="lg" asChild className="flex-1">
                  <a href="tel:03075777559" className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call 030-7577-7559</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild className="flex-1">
                  <a 
                    href="https://wa.me/+9203075777559?text=Hi%20RentOnUs%2C%20I%20just%20submitted%20a%20booking%20request." 
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`trust-card ${className}`} id="booking">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Car className="w-6 h-6 text-accent" />
          <span>Book Your Car</span>
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll contact you within minutes to confirm your booking.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Rental Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rental Details</h3>
            
            {/* Pickup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Pickup Date</Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupTime">Pickup Time</Label>
                <Input
                  id="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupLocation">Pickup Location</Label>
                <Input
                  id="pickupLocation"
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                  placeholder="e.g., Airport, Hotel, Address"
                />
              </div>
            </div>

            {/* Drop-off */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dropoffDate">Drop-off Date</Label>
                <Input
                  id="dropoffDate"
                  type="date"
                  value={formData.dropoffDate}
                  onChange={(e) => handleInputChange("dropoffDate", e.target.value)}
                  min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoffTime">Drop-off Time</Label>
                <Input
                  id="dropoffTime"
                  type="time"
                  value={formData.dropoffTime}
                  onChange={(e) => handleInputChange("dropoffTime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                <Input
                  id="dropoffLocation"
                  type="text"
                  value={formData.dropoffLocation}
                  onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                  placeholder="e.g., Airport, Hotel, Address"
                />
              </div>
            </div>
          </div>

          {/* Car Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preferences</h3>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="withDriver"
                checked={formData.withDriver}
                onCheckedChange={(checked) => handleInputChange("withDriver", checked)}
              />
              <Label htmlFor="withDriver" className="text-sm">
                {formData.withDriver ? "With Professional Driver" : "Self-Drive"}
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredCar">Preferred Car</Label>
              <Select value={formData.preferredCar} onValueChange={(value) => handleInputChange("preferredCar", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred car" />
                </SelectTrigger>
                <SelectContent>
                  {carOptions.map((car) => (
                    <SelectItem key={car} value={car}>
                      {car}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Any special requirements, questions, or additional information..."
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Sending Request..." : "Book Now"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by RentOnUs regarding your booking.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;