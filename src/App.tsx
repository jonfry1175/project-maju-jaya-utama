import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutCompany from "./pages/AboutCompany";
import ProfessionalServices from "./pages/ProfessionalServices";
import OurPartnership from "./pages/OurPartnership";
import OurLeadership from "./pages/OurLeadership";
import LeadershipDetail from "./pages/LeadershipDetail";
import FundRaising from "./pages/FundRaising";
import IpoMapping from "./pages/IpoMapping";
import ScenarioPlans from "./pages/ScenarioPlans";
import ProformaFinancialReport from "./pages/ProformaFinancialReport";
import ManagementImprovementPlans from "./pages/ManagementImprovementPlans";
import BridgingFinancing from "./pages/BridgingFinancing";
import IpoCompliancePlans from "./pages/IpoCompliancePlans";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/professional-services" element={<ProfessionalServices />} />
            <Route path="/partners" element={<Navigate to="/our-clients" replace />} />
            <Route path="/our-partnership" element={<Navigate to="/our-clients" replace />} />
            <Route path="/our-clients" element={<OurPartnership />} />
            <Route path="/our-leadership" element={<OurLeadership />} />
            <Route path="/our-leadership/:memberKey" element={<LeadershipDetail />} />
            <Route path="/fund-raising" element={<FundRaising />} />
            <Route path="/ipo-process/mapping" element={<IpoMapping />} />
            <Route path="/ipo-process/scenario-plans" element={<ScenarioPlans />} />
            <Route path="/ipo-process/proforma-financial-report" element={<ProformaFinancialReport />} />
            <Route path="/ipo-process/management-improvement-plans" element={<ManagementImprovementPlans />} />
            <Route path="/ipo-process/bridging-financing" element={<BridgingFinancing />} />
            <Route path="/ipo-process/compliance-plans" element={<IpoCompliancePlans />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppFloatingButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
