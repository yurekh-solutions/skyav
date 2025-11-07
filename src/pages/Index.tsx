import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SEO from "@/components/SEO";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { pageSEO } from "@/config/seo";
import { initTracking, trackPageView } from "@/lib/tracking";
import { initPerformanceMonitoring } from "@/lib/performance";

// Lazy load components that are below the fold
const Portfolio = lazy(() => import("@/components/Portfolio"));
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const InstagramFeed = lazy(() => import("@/components/InstagramFeed"));
const VideoCarousel = lazy(() => import("@/components/VideoCarousel"));

const Index = () => {
  useEffect(() => {
    // Initialize tracking
    initTracking();
    // Track page view
    trackPageView(window.location.pathname, document.title);
    // Monitor performance (Core Web Vitals for Quality Score)
    initPerformanceMonitoring();
  }, []);

  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
      />
      <GoogleAnalytics enabled={false} />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Features />
          
          {/* Lazy load below-the-fold content */}
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <VideoCarousel />
            <Portfolio />
            <About />
            <Testimonials />
            <InstagramFeed />
            <FAQ />
          </Suspense>
          
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Index;
