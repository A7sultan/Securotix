import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import EnterpriseSecurity from "./pages/EnterpriseSecurity";
import NetworkInfrastructure from "./pages/NetworkInfrastructure";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OneKosmos from "./pages/partners/1kosmos";
import MiniOrange from "./pages/partners/miniorange";
import Tufin from "./pages/partners/tufin";
import Fudo from "./pages/partners/fudo";
import Filigran from "./pages/partners/filigran";
import Nucleus from "./pages/partners/nucleus";
import MazeBolt from "./pages/partners/mazebolt";
import JizoAI from "./pages/partners/jizo-ai";
import ITConsultancy from "./pages/services/ITConsultancy";
import ProfessionalServices from "./pages/services/ProfessionalServices";
import SupportServices from "./pages/services/SupportServices";
import VAPTServices from "./pages/services/Cybersecurity Advisory and Training/VAPTServices";
import WebAppSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/WebAppSecurityTesting";
import MobileAppSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/MobileAppSecurityTesting";
import Vendors from "./pages/Customers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/enterprise-security" element={<EnterpriseSecurity />} />
          <Route
            path="/network-infrastructure"
            element={<NetworkInfrastructure />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/1Kosmos" element={<OneKosmos />} />
          <Route path="/MiniOrange" element={<MiniOrange />} />
          <Route path="/Tufin" element={<Tufin />} />
          <Route path="/Fudo" element={<Fudo />} />
          <Route path="/Filigran" element={<Filigran />} />
          <Route path="/Nucleus" element={<Nucleus />} />
          <Route path="/MazeBolt" element={<MazeBolt />} />
          <Route path="/JizoAI" element={<JizoAI />} />
          <Route path="/services/it-consultancy" element={<ITConsultancy />} />
          <Route
            path="/services/professional-services"
            element={<ProfessionalServices />}
          />
          <Route path="/services/vapt-services" element={<VAPTServices />} />
          <Route
            path="/services/web-application-security-testing"
            element={<WebAppSecurityTesting />}
          />
          <Route
            path="/services/mobile-application-security-testing"
            element={<MobileAppSecurityTesting />}
          />
          <Route
            path="/services/support-services"
            element={<SupportServices />}
          />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
