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

const RoutePlaceholder = ({ title }: { title: string }) => (
  <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="layout-container">
      <div className="max-w-3xl rounded-2xl border border-border/70 bg-card/90 p-8 shadow-soft">
        <p className="text-small uppercase tracking-wide text-muted-foreground">
          Planned Route
        </p>
        <h1 className="heading-md mt-2">{title}</h1>
        <p className="text-body mt-4 text-muted-foreground">
          This route shell is ready and will be populated in the next tasks.
        </p>
      </div>
    </div>
  </section>
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
                <RoutePlaceholder title="About Us / Our Company" />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team"
            element={
              <Page>
                <RoutePlaceholder title="About Us / Our Team" />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team/:slug"
            element={
              <Page>
                <RoutePlaceholder title="About Us / Team Member Detail" />
              </Page>
            }
          />
          <Route
            path="/about-us/certifications"
            element={
              <Page>
                <RoutePlaceholder title="About Us / Certifications" />
              </Page>
            }
          />
          <Route
            path="/about-us/company-awards"
            element={
              <Page>
                <RoutePlaceholder title="About Us / Company Awards" />
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
                <RoutePlaceholder title="Products" />
              </Page>
            }
          />
          <Route
            path="/gallery"
            element={
              <Page>
                <RoutePlaceholder title="Gallery" />
              </Page>
            }
          />
          <Route
            path="/news"
            element={
              <Page>
                <RoutePlaceholder title="News" />
              </Page>
            }
          />
          <Route
            path="/news/:slug"
            element={
              <Page>
                <RoutePlaceholder title="News Detail" />
              </Page>
            }
          />
          <Route
            path="/services"
            element={
              <Page>
                <RoutePlaceholder title="Services" />
              </Page>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <Page>
                <RoutePlaceholder title="Service Detail" />
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
                <RoutePlaceholder title="Career / Employee" />
              </Page>
            }
          />
          <Route
            path="/career/intern"
            element={
              <Page>
                <RoutePlaceholder title="Career / Intern" />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <RoutePlaceholder title="Contact" />
              </Page>
            }
          />
          <Route
            path="/location"
            element={
              <Page>
                <RoutePlaceholder title="Location" />
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
