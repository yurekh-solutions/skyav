import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();
  const phoneNumber = "+918655973366";

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

  const handlePhoneClick = () => {
    toast({
      title: "Calling...",
      description: "Connecting you to Sky AV",
    });
  };

  return (
    <>
      {/* Mobile: Bottom fixed bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gradient-to-t from-white via-white to-transparent backdrop-blur-sm border-t border-gray-200 px-4 py-3 shadow-2xl">
          <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
            {/* WhatsApp Button - Mobile */}
            <a
              href="https://wa.me/918655973366?text=Hi%2C%20I%27m%20interested%20in%20your%20AV%20equipment%20rental%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group"
              aria-label="Contact on WhatsApp"
            >
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] active:scale-95">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">WhatsApp</span>
              </div>
            </a>
            
            {/* Phone Button - Mobile */}
            <a
              href={`tel:${phoneNumber}`}
              onClick={handlePhoneClick}
              className="flex-1 group"
              aria-label="Call now"
            >
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 bg-primary hover:bg-primary/90 active:scale-95">
                <Phone className="h-5 w-5 text-white animate-pulse" />
                <span className="text-sm font-semibold text-white">Call Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: Floating buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* WhatsApp Button - Desktop */}
        <a
          href="https://wa.me/918655973366?text=Hi%2C%20I%27m%20interested%20in%20your%20AV%20equipment%20rental%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="Contact on WhatsApp"
        >
          <div className="h-16 w-16 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center cursor-pointer group-hover:scale-110 animate-float">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
        
        {/* Phone Button - Desktop */}
        <a
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick}
          className="group relative"
          aria-label="Call now"
        >
          <div className="h-16 w-16 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 bg-primary hover:bg-primary/90 flex items-center justify-center cursor-pointer group-hover:scale-110 animate-float relative" style={{ animationDelay: '150ms' }}>
            <Phone className="h-7 w-7 text-white" />
            {/* Pulsing ring effect */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></span>
          </div>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Call: {phoneNumber}
          </span>
        </a>

        {/* Scroll to Top Button - Desktop */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="h-16 w-16 rounded-full shadow-2xl bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-fade-in flex items-center justify-center cursor-pointer group relative"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-7 w-7 text-primary" />
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Back to top
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingActions;
