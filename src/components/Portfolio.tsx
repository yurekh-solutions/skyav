import { useState } from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Corporate", "Wedding", "Concert", "Education", "Product Launch", "Party"];

  const portfolioItems = [
    {
      image: gallery1,
      title: "Tech Summit 2024 - Grand Conference",
      category: "Corporate",
      description: "Massive LED wall installation, multi-zone audio, and live streaming for 1000+ attendees at BKC Convention Center",
    },
    {
      image: gallery2,
      title: "Royal Wedding Extravaganza",
      category: "Wedding",
      description: "Spectacular LED backdrop, ambient lighting, concert-grade sound system, and cinematic videography at Taj Lands End",
    },
    {
      image: gallery3,
      title: "Bollywood Night - Live Concert",
      category: "Concert",
      description: "Professional line array sound, dynamic stage lighting, LED screens, and multi-camera production for 5000+ audience",
    },
    {
      image: gallery4,
      title: "International School Annual Fest",
      category: "Education",
      description: "Complete stage setup with LED walls, theatrical lighting, wireless mics, and professional recording at NCPA",
    },
    {
      image: gallery5,
      title: "Luxury Car Launch - Brand Reveal",
      category: "Product Launch",
      description: "Dramatic LED wall reveal, precision lighting, immersive audio, and 4K projection mapping at World Trade Center",
    },
    {
      image: gallery6,
      title: "Celebrity Birthday Bash",
      category: "Party",
      description: "Premium DJ setup, LED dance floor, ambient lighting, karaoke system, and photo booth at JW Marriott",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Sky Vision Multimedia Portfolio",
    "description": "Our portfolio of successful AV equipment rental events across Mumbai",
    "image": portfolioItems.map(item => ({
      "@type": "ImageObject",
      "name": item.title,
      "description": item.description,
      "contentUrl": `https://skyav.in${item.image}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - AV Equipment Rental Events | Sky Vision Multimedia</title>
        <meta name="description" content="View our portfolio of successful events - Corporate conferences, weddings, concerts, and more. 5000+ events covered across Mumbai with premium AV equipment." />
        <meta name="keywords" content="AV rental portfolio, event gallery Mumbai, corporate events, wedding AV setup, concert equipment, event photography Mumbai" />
        <link rel="canonical" href="https://skyav.in/#portfolio" />
        <script type="application/ld+json">
          {JSON.stringify(portfolioStructuredData)}
        </script>
      </Helmet>
      
      <section id="portfolio" className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
             Portfolio
            </span>
          </div>
          {/* <p className="text-base font-medium text-primary mb-2">Portfolio</p> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5a3a2a]">
            Spectacular Events <span className="text-gradient">We've Powered</span>
          </h2>
          <p className="text-lg text-[#6b4a3a] max-w-2xl mx-auto">
            From intimate gatherings to grand productions - witness the magic of premium LED walls, concert-grade audio, and stunning lighting that transforms ordinary venues into extraordinary experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer hover-lift"
              onClick={() => setLightboxImage(item.image)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - AV equipment rental Mumbai`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/90">{item.description}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-primary/80 rounded-full text-xs font-medium w-fit">
                  {item.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Portfolio item enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Portfolio;
