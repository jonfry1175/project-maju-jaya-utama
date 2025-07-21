import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurPartnership from "./pages/OurPartnership";
import OurLeadership from "./pages/OurLeadership";
import LeadershipDetail from "./pages/LeadershipDetail";
import FundRaising from "./pages/FundRaising";
import IpoMapping from "./pages/IpoMapping";
import ScenarioPlans from "./pages/ScenarioPlans";
import ProformaFinancialReport from "./pages/ProformaFinancialReport";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partners" element={<Navigate to="/our-clients" replace />} />
          <Route path="/our-partnership" element={<Navigate to="/our-clients" replace />} />
          <Route path="/our-clients" element={<OurPartnership />} />
          <Route path="/our-leadership" element={<OurLeadership />} />
          <Route path="/our-leadership/:memberKey" element={<LeadershipDetail />} />
          <Route path="/fund-raising" element={<FundRaising />} />
          <Route path="/ipo-process/mapping" element={<IpoMapping />} />
          <Route path="/ipo-process/scenario-plans" element={<ScenarioPlans />} />
          <Route path="/ipo-process/proforma-financial-report" element={<ProformaFinancialReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
