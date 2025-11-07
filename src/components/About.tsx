import { Award, Users, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Award, label: "Events Covered", value: "5000+" },
    { icon: MapPin, label: "Cities Served", value: "7+" },
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
      
      <section id="about" className="py-24 bg-gradient-to-br from-orange-100 via-red-100 to-orange-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5a3a2a]">
              Mumbai's Premier <span className="text-gradient">Event Technology Partner</span>
            </h2>
            <p className="text-lg text-[#6b4a3a] mb-6 leading-relaxed">
              For over 15 years, Sky Vision Multimedia has been the trusted name behind Mumbai's most spectacular events. From intimate corporate gatherings to grand concerts with thousands of attendees, we bring cutting-edge technology and flawless execution to every occasion.
            </p>
            <p className="text-lg text-[#6b4a3a] mb-6 leading-relaxed">
              Our arsenal includes state-of-the-art LED walls, concert-grade sound systems, dynamic stage lighting, professional projection systems, and complete event production services. We've powered events at iconic venues like Taj Hotels, NCPA, World Trade Center, and countless celebrations across Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass-card rounded-xl px-6 py-3 bg-gradient-to-br from-white to-[#f5e6d8] shadow-lg">
                <p className="font-bold text-primary">ISO 9001 Certified</p>
              </div>
              <div className="glass-card rounded-xl px-6 py-3 bg-gradient-to-br from-white to-[#f5e6d8] shadow-lg">
                <p className="font-bold text-primary">24/7 Technical Support</p>
              </div>
              <div className="glass-card rounded-xl px-6 py-3 bg-gradient-to-br from-white to-[#f5e6d8] shadow-lg">
                <p className="font-bold text-primary">Backup Equipment</p>
              </div>
              <div className="glass-card rounded-xl px-6 py-3 bg-gradient-to-br from-white to-[#f5e6d8] shadow-lg">
                <p className="font-bold text-primary">Expert Technicians</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover-lift animate-float"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
