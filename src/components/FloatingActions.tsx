import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918655973366?text=Hi%2C%20I%27m%20interested%20in%20your%20AV%20equipment%20rental%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        aria-label="Contact on WhatsApp"
      >
        <Button
          size="lg"
          className="h-16 w-16 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] animate-float group-hover:scale-110"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </a>
      
      {/* Phone Button */}
      <a
        href="tel:+918655973366"
        className="group"
        aria-label="Call now"
      >
        <Button
          size="lg"
          className="h-16 w-16 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110"
          style={{ animationDelay: '150ms' }}
        >
          <Phone className="h-7 w-7" />
        </Button>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="lg"
          variant="secondary"
          className="h-16 w-16 rounded-full shadow-2xl glass-card hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-7 w-7" />
        </Button>
      )}
    </div>
  );
};

export default FloatingActions;
