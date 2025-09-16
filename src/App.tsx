import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLoader from "./components/GlobalLoader";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import { useGlobalLoader } from "./hooks/useGlobalLoader";
import Index from "./pages/Index";
import FortunerPage from "./pages/FortunerPage";
import CarsPage from "./pages/CarsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import CarRentalKarachiPage from "./pages/CarRentalKarachiPage";
import WeddingCarsKarachiPage from "./pages/WeddingCarsKarachiPage";
import CityToCityCarRentalPage from "./pages/CityToCityCarRentalPage";
import MonthlyCarRentalPage from "./pages/MonthlyCarRentalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoaderVisible } = useGlobalLoader();
  
  return (
    <>
      <ScrollToTop />
      <GlobalLoader isVisible={isLoaderVisible} />
      <PageLoader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/toyota-fortuner-rental-karachi" element={<FortunerPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/services/car-rental-karachi" element={<CarRentalKarachiPage />} />
        <Route path="/services/wedding-cars-karachi" element={<WeddingCarsKarachiPage />} />
        <Route path="/services/city-to-city-car-rental" element={<CityToCityCarRentalPage />} />
        <Route path="/services/monthly-car-rental" element={<MonthlyCarRentalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
