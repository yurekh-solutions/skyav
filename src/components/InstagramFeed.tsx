import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const InstagramFeed = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setIsLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/90 mb-4 shadow-lg">
            <Instagram className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5a3a2a]">
            Follow Our Journey
          </h2>
          <p className="text-lg text-[#6b4a3a] max-w-2xl mx-auto">
            Stay connected with our latest projects, behind-the-scenes moments, and creative inspiration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Instagram Profile Card */}
          <div className="glass-card rounded-2xl p-8 hover-lift bg-white/90 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">@skyav.in</h3>
                <p className="text-gray-600 text-sm md:text-base">AV Equipment Rental</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              Follow us on Instagram for latest AV equipment setups, event highlights, and behind-the-scenes content from Mumbai's top events!
            </p>
            
            <a
              href="https://www.instagram.com/skyav.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              Follow on Instagram
            </a>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
             
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="glass-card rounded-2xl p-6 bg-white/90 backdrop-blur-sm hover-lift">
            <div className="relative overflow-hidden rounded-xl">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/skyav.in/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  margin: "0",
                  minWidth: "280px",
                  padding: "0",
                  width: "100%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href="https://www.instagram.com/skyav.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#FFFFFF",
                      lineHeight: "0",
                      padding: "0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    <div className="flex items-center justify-center py-8">
                      <Instagram className="w-12 h-12 text-primary animate-pulse" />
                    </div>
                    <div className="text-center py-4">
                      <p className="text-[#6b4a3a] font-semibold">
                        View this profile on Instagram
                      </p>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Instagram Gallery Preview */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <a
              key={i}
              href="https://www.instagram.com/skyav.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden group relative hover-lift"
            >
              <div className="absolute inset-0 terracotta-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <div className="w-full h-full bg-gradient-to-br from-[#d4b5a0] to-[#c9a88a] flex items-center justify-center">
                <span className="text-6xl font-bold text-white/30">{i}</span>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default InstagramFeed;

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
