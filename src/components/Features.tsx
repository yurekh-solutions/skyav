import { Monitor, Shield, Clock, Award, Headphones, ThumbsUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Latest Equipment",
      description: "High-quality LED walls, projectors, and sound systems from top brands. All equipment is regularly maintained and updated.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Backup Equipment Available",
      description: "We always carry spare equipment to your event. If anything stops working, we replace it immediately.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Call us anytime, day or night. We deliver and set up equipment quickly across Mumbai and nearby cities.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "We have successfully completed over 5000 events for companies, weddings, schools, and concerts.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Headphones,
      title: "Expert Technical Team",
      description: "Our trained technicians will set up, operate, and manage all equipment during your event.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ThumbsUp,
      title: "Affordable Prices",
      description: "Get the best quality equipment at competitive prices. Free quotes and flexible rental packages available.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sky Vision Multimedia Features",
    "description": "Why choose Sky Vision Multimedia for AV equipment rental in Mumbai",
    "itemListElement": features.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": feature.title,
      "description": feature.description
    }))
  };

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Best AV Equipment Rental Mumbai | Sky Vision</title>
        <meta name="description" content="15+ years experience, 24/7 support, backup equipment, expert team, affordable prices. Trusted AV rental company in Mumbai for 5000+ successful events." />
        <meta name="keywords" content="best AV rental Mumbai, reliable equipment rental, affordable projector rental, professional sound system, LED wall rental Mumbai" />
        <link rel="canonical" href="https://skyav.in/#features" />
        <script type="application/ld+json">
          {JSON.stringify(featuresStructuredData)}
        </script>
      </Helmet>
      
      <section id="features" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#fff6ef' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5a3a2a]">
              Why Sky Vision <span className="text-gradient">Multimedia?</span>
            </h2>
            <p className="text-xl text-[#6b4a3a] max-w-2xl mx-auto">
              Quality equipment, reliable service, and affordable prices for all your event needs in Mumbai
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-orange-200 hover:border-primary transition-all duration-300 hover-lift shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with solid background */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#5a3a2a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b4a3a] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5000+", label: "Events Completed" },
            { value: "1000+", label: "Happy Clients" },
            { value: "15+", label: "Years in Business" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl border border-orange-200 hover:border-primary transition-all duration-300 hover-lift shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[#6b4a3a] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;
