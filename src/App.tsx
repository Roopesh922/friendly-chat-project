
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ProductLivingRoom from "./pages/ProductLivingRoom";
import ProductBedroom from "./pages/ProductBedroom";
import ContactUs from "./pages/ContactUs";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/products/living-room" element={<ProductLivingRoom />} />
              <Route path="/products/bedroom" element={<ProductBedroom />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/blog/sustainable-furniture" element={<BlogPost1 />} />
              <Route path="/blog/interior-design-tips" element={<BlogPost2 />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
