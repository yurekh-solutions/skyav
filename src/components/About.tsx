import { Award, Users, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const stats = [
    { icon: Clock, label: "Years", value: "15+" },
    { icon: Users, label: "Clients", value: "1000+" },
    { icon: Award, label: "Events", value: "5000+" },
    { icon: MapPin, label: "Cities", value: "7+" },
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sky Vision Multimedia",
    "description": "15-year-old Audio-Video Equipment Rental Company based in Mumbai serving 1000+ clients across Maharashtra",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sky Vision Multimedia",
      "foundingDate": "2009",
      "description": "Professional AV equipment rental company",
      "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Lonavala", "Surat", "Goa"],
      "slogan": "Your trusted partner for premium AV equipment rental"
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - 15+ Years AV Equipment Rental | Sky Vision Multimedia</title>
        <meta name="description" content="Sky Vision Multimedia - 15+ years of excellence in AV equipment rental. Serving 1000+ clients across Mumbai, Navi Mumbai, Thane, Pune. ISO certified, 24/7 support." />
        <meta name="keywords" content="about sky vision, AV rental company Mumbai, audio video equipment rental, professional AV services, Mumbai event equipment" />
        <link rel="canonical" href="https://skyav.in/#about" />
        <script type="application/ld+json">
          {JSON.stringify(aboutStructuredData)}
        </script>
      </Helmet>
      
      <section id="about" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                Mumbai's Premier <span className="text-gradient">Event Technology Partner</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                For over 15 years, Sky Vision Multimedia has been the trusted name behind Mumbai's most spectacular events. From intimate corporate gatherings to grand concerts with thousands of attendees, we bring cutting-edge technology and flawless execution to every occasion.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Our arsenal includes state-of-the-art LED walls, concert-grade sound systems, dynamic stage lighting, professional projection systems, and complete event production services.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/60 backdrop-blur-md rounded-xl p-3 md:p-4 text-center border border-white/40 shadow-lg"
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-primary" />
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="bg-white/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-2 md:py-3 border border-white/40 shadow-lg">
                  <p className="font-bold text-primary text-sm md:text-base">ISO Certified</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-2 md:py-3 border border-white/40 shadow-lg">
                  <p className="font-bold text-primary text-sm md:text-base">24/7 Support</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-xl px-4 md:px-6 py-2 md:py-3 border border-white/40 shadow-lg">
                  <p className="font-bold text-primary text-sm md:text-base">Expert Team</p>
                </div>
              </div>
            </div>

            {/* Image Carousel with Glass Effect */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  alt="Professional LED wall setup at corporate event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Glass overlay card */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/40">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">Premium AV Equipment</h3>
                  <p className="text-white/90 text-sm md:text-base">LED Walls • Sound Systems • Stage Lighting • Complete Production</p>
                </div>
              </div>

              {/* Small gallery grid with glass effect */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4">
                <div className="relative h-20 md:h-24 lg:h-32 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80"
                    alt="LED wall display"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </div>
                <div className="relative h-20 md:h-24 lg:h-32 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80"
                    alt="Sound system setup"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </div>
                <div className="relative h-20 md:h-24 lg:h-32 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80"
                    alt="Stage lighting"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
