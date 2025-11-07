import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional AV equipment setup at corporate event in Mumbai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/100  to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Transform Your Events with
            <span className="block text-primary mt-2">Premium LED & AV Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Mumbai's leading event technology partner. Spectacular LED walls, concert-grade sound, and complete AV solutions for unforgettable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Button 
              size="default"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 gap-2"
              onClick={() => window.open('tel:+918655973366')}
            >
              <Phone className="h-4 w-4 md:h-5 md:h-5" />
              +91 86559 73366
            </Button>
            <Button 
              size="default"
              variant="secondary"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 gap-2 bg-white hover:bg-white/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 md:h-5 md:h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 text-white/90 text-sm md:text-base lg:text-lg">
            <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <span className="font-semibold">5000+ Events</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <span className="font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <span className="font-semibold">Premium Equipment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

export default Hero;
