import { useMemo } from "react";
import { useLocation } from "react-router-dom";

type HeroConfig = {
  matcher: (pathname: string) => boolean;
  image: string;
  objectPosition?: string;
};

const HERO_CONFIGS: HeroConfig[] = [
  {
    matcher: (pathname) => pathname.startsWith("/about-us"),
    image: "/assets/images/team-workers.jpg",
    objectPosition: "center 30%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/services"),
    image: "/assets/images/services/industrial-packaging.png",
    objectPosition: "center 35%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/products"),
    image: "/assets/images/products/packaging-materials.jpg",
    objectPosition: "center 40%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/gallery"),
    image: "/assets/images/factory-interior.jpg",
    objectPosition: "center 34%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/news"),
    image: "/assets/images/news/factory-production.jpg",
    objectPosition: "center 36%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/career"),
    image: "/assets/images/quality-control.jpg",
    objectPosition: "center 38%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/contact"),
    image: "/assets/images/industrial-bg.jpg",
    objectPosition: "center 42%",
  },
  {
    matcher: (pathname) => pathname.startsWith("/location"),
    image: "/assets/images/hero-manufacturing.jpg",
    objectPosition: "center 32%",
  },
];

const DEFAULT_HERO_IMAGE = "/assets/images/hero-manufacturing-v2.png";

const InnerPageHero = () => {
  const { pathname } = useLocation();

  const hero = useMemo(() => {
    return (
      HERO_CONFIGS.find((config) => config.matcher(pathname)) ?? {
        image: DEFAULT_HERO_IMAGE,
        objectPosition: "center",
      }
    );
  }, [pathname]);

  return (
    <section
      aria-hidden
      className="relative min-h-[50vh] w-full overflow-hidden border-b border-border/50"
    >
      <img
        src={hero.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: hero.objectPosition }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--secondary)/0.58)_0%,hsl(var(--secondary)/0.28)_44%,hsl(var(--background)/0.78)_100%)]" />
      <div className="absolute inset-0 bg-grid-industrial opacity-[0.2]" />
      <div className="absolute inset-0 bg-noise opacity-[0.06]" />
    </section>
  );
};

export default InnerPageHero;
