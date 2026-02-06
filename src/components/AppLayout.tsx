import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerPageHero from "@/components/InnerPageHero";
import PageBackground from "@/components/PageBackground";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen bg-background relative isolate overflow-hidden">
      <PageBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {!isHomePage ? <InnerPageHero /> : null}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
