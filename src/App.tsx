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
import OneKosmos from "./pages/Vendors/1kosmos";
import MiniOrange from "./pages/Vendors/miniorange";
import Tufin from "./pages/Vendors/tufin";
import Fudo from "./pages/Vendors/fudo";
import Nucleus from "./pages/Vendors/nucleus";
import MazeBolt from "./pages/Vendors/mazebolt";
import JizoAI from "./pages/Vendors/jizo-ai";
import ITConsultancy from "./pages/services/ITConsultancy";
import ProfessionalServices from "./pages/services/ProfessionalServices";
import SupportServices from "./pages/services/SupportServices";
import VAPTServices from "./pages/services/Cybersecurity Advisory and Training/VAPTServices";
import WebAppSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/WebAppSecurityTesting";
import MobileAppSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/MobileAppSecurityTesting";
import Vendors from "./pages/Vendors";
import ScrollToTop from "./components/ScrollToTop";
import NetworkPenetrationTesting from "./pages/services/Cybersecurity Advisory and Training/NetworkPenetrationTesting";
import CloudPenetrationTesting from "./pages/services/Cybersecurity Advisory and Training/CloudPenetrationTesting";
import IoTSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/IoTSecurityTesting";
import SecureCodeReview from "./pages/services/Cybersecurity Advisory and Training/SecureCodeReview";
import MedicalDeviceSecurityTesting from "./pages/services/Cybersecurity Advisory and Training/MedicalDeviceSecurityTesting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
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
            path="/services/network-penetration-testing"
            element={<NetworkPenetrationTesting />}
          />
          <Route path="/services/cloud-penetration-testing" element={<CloudPenetrationTesting />} />
          <Route
            path="/services/iot-security-testing"
            element={<IoTSecurityTesting />} />
            <Route
            path="/services/secure-code-review"
            element={<SecureCodeReview />} />
            <Route path="/services/medical-device-security-testing" element={<MedicalDeviceSecurityTesting />} />
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
