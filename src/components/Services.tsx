import { Monitor, Tv, Volume2, Mic2, Camera, Projector } from "lucide-react";
import { Helmet } from "react-helmet-async";
import projectorImg from "@/assets/projector.jpg";
import ledWallImg from "@/assets/tv3.jpeg";
import soundSystemImg from "@/assets/sound1.png";
import gallery1Img from "@/assets/tv4.jpeg";
import gallery2Img from "@/assets/gallery-2.jpg";
import gallery3Img from "@/assets/gallery-3.jpg";
import gallery4Img from "@/assets/gallery-4.jpg";
import gallery5Img from "@/assets/gallery-5.jpg";
import gallery6Img from "@/assets/gallery-6.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "LED Wall Rental",
      description: "High-quality LED walls for indoor and outdoor events. Perfect for concerts, weddings, exhibitions, and corporate events.",
      image: ledWallImg,
      badge: "Popular"
    },
    {
      icon: Projector,
      title: "Projector Rental",
      description: "Bright projectors with screens for conferences, training sessions, and presentations. All sizes available.",
      image: projectorImg,
      badge: "Best Seller"
    },
    {
      icon: Tv,
      title: "LED TV Rental",
      description: "Large LED TVs on rent for presentations, exhibitions, product displays, and events across Mumbai.",
      image: gallery1Img,
      badge: "Affordable"
    },
    {
      icon: Volume2,
      title: "Sound System Rental",
      description: "Professional speakers, microphones, and mixers for clear sound at weddings, parties, and corporate events.",
      image: soundSystemImg,
      badge: "Quality"
    },
    {
      icon: Mic2,
      title: "Stage Lighting Rental",
      description: "LED lights, spotlights, and special effects for stage shows, weddings, concerts, and birthday parties.",
      image: gallery2Img,
      badge: "Trending"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photo and video services for weddings, corporate events, and special occasions.",
      image: gallery3Img,
      badge: "Complete"
    },
  ];

  // Structured data for SEO
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sky Vision Multimedia Services",
    "description": "Professional AV equipment rental services in Mumbai",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Sky Vision Multimedia",
        "telephone": "+918655973366",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Pune"],
      "serviceType": service.title
    }))
  };

  return (
    <>
      <Helmet>
        <title>AV Equipment Rental Services Mumbai | Sky Vision Multimedia</title>
        <meta name="description" content="Professional AV equipment rental in Mumbai - Projectors, LED Walls, Sound Systems, LED TVs, Karaoke & Photography. 15+ years experience. Call +91 86559 73366" />
        <meta name="keywords" content="projector rental mumbai, LED wall rental, sound system rental, LED TV rental, karaoke rental, photography services mumbai, AV equipment rental" />
        <link rel="canonical" href="https://skyav.in/#services" />
        <script type="application/ld+json">
          {JSON.stringify(servicesStructuredData)}
        </script>
      </Helmet>
      
      <section id="services" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/60 backdrop-blur-md text-primary rounded-full text-sm font-semibold border border-white/40 shadow-lg">
              Premium Event Technology
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Professional AV equipment rental for all types of events - weddings, corporate meetings, concerts, parties, and more
          </p>
          
          {/* Additional Info Cards */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
            <div className="bg-white/60 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-gray-700">✓ Same Day Delivery</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-gray-700">✓ Free Setup</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40 shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-gray-700">✓ Technical Support</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden hover-lift group shadow-xl border border-white/40 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Mumbai`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-lg">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/40 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {service.description}
                  </p>
                  <button className="mt-4 text-primary font-semibold hover:text-accent transition-colors duration-300 flex items-center gap-2 group/btn">
                    Learn More
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
