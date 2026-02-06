import AppLayout from "@/components/AppLayout";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy, type ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const queryClient = new QueryClient();

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Products = lazy(() => import("./pages/Products"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Location = lazy(() => import("./pages/Location"));
const CareerEmployee = lazy(() => import("./pages/CareerEmployee"));
const CareerIntern = lazy(() => import("./pages/CareerIntern"));
const OurCompany = lazy(() => import("./pages/about-us/OurCompany"));
const OurTeam = lazy(() => import("./pages/about-us/OurTeam"));
const TeamMemberDetail = lazy(() => import("./pages/about-us/TeamMemberDetail"));
const Certifications = lazy(() => import("./pages/about-us/Certifications"));
const CompanyAwards = lazy(() => import("./pages/about-us/CompanyAwards"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Page = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Page>
                <Index />
              </Page>
            }
          />
          <Route
            path="/about-us/our-company"
            element={
              <Page>
                <OurCompany />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team"
            element={
              <Page>
                <OurTeam />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team/:slug"
            element={
              <Page>
                <TeamMemberDetail />
              </Page>
            }
          />
          <Route
            path="/about-us/certifications"
            element={
              <Page>
                <Certifications />
              </Page>
            }
          />
          <Route
            path="/about-us/company-awards"
            element={
              <Page>
                <CompanyAwards />
              </Page>
            }
          />
          <Route
            path="/about"
            element={<Navigate to="/about-us/our-company" replace />}
          />
          <Route
            path="/about-us"
            element={<Navigate to="/about-us/our-company" replace />}
          />
          <Route
            path="/products"
            element={
              <Page>
                <Products />
              </Page>
            }
          />
          <Route
            path="/gallery"
            element={
              <Page>
                <Gallery />
              </Page>
            }
          />
          <Route
            path="/news"
            element={
              <Page>
                <News />
              </Page>
            }
          />
          <Route
            path="/news/:slug"
            element={
              <Page>
                <NewsDetail />
              </Page>
            }
          />
          <Route
            path="/services"
            element={
              <Page>
                <Services />
              </Page>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <Page>
                <ServiceDetail />
              </Page>
            }
          />
          <Route
            path="/career"
            element={<Navigate to="/career/employee" replace />}
          />
          <Route
            path="/career/employee"
            element={
              <Page>
                <CareerEmployee />
              </Page>
            }
          />
          <Route
            path="/career/intern"
            element={
              <Page>
                <CareerIntern />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route
            path="/location"
            element={
              <Page>
                <Location />
              </Page>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Page>
              <NotFound />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="relative flex h-28 w-28 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-border/70 shadow-soft" />
                  <span className="absolute inset-1 rounded-full border-4 border-transparent border-b-primary border-t-primary border-l-transparent border-r-transparent animate-[spin_1.4s_linear_infinite]" />
                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[18px] bg-card shadow-medium">
                    <img
                      src="/logo.png"
                      alt="Maju Jaya logo"
                      className="h-9 w-9 object-contain"
                    />
                  </span>
                </div>
              </div>
            }
          >
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
