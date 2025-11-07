import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Import video files
import led77Video from "@/assets/led77.mp4";
import ledtvVideo from "@/assets/ledtv.mp4";
import ledtv2Video from "@/assets/ledtv2.mp4";
import ledtv4Video from "@/assets/ledtv4.mp4";
import ledwall1Video from "@/assets/ledwall1.mp4";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
}

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sky Vision Multimedia video portfolio
  const videos: Video[] = [
    {
      id: "1",
      title: "Professional LED Wall Installation",
      description: "Expert LED wall installation and configuration services for premium events",
      thumbnail: ledwall1Video,
      videoUrl: ledwall1Video,
      duration: "0:35",
      category: "LED Wall"
    },
    {
      id: "2",
      title: "Premium LED Wall Display Setup",
      description: "High-resolution LED wall installation for corporate events and exhibitions",
      thumbnail: led77Video,
      videoUrl: led77Video,
      duration: "0:30",
      category: "LED Wall"
    },
    {
      id: "3",
      title: "LED TV Rental Solutions",
      description: "Professional LED TV displays for conferences, weddings, and events",
      thumbnail: ledtvVideo,
      videoUrl: ledtvVideo,
      duration: "0:25",
      category: "LED TV"
    },
    {
      id: "4",
      title: "Large Format LED Display",
      description: "Stunning large-format LED screens for impactful presentations",
      thumbnail: ledtv2Video,
      videoUrl: ledtv2Video,
      duration: "0:28",
      category: "LED Display"
    },
    {
      id: "5",
      title: "Event LED Screen Setup",
      description: "Complete LED screen solutions for events of all sizes",
      thumbnail: ledtv4Video,
      videoUrl: ledtv4Video,
      duration: "0:32",
      category: "Event Setup"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay || isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPlaying, videos.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(null);
  };

  const handlePlayVideo = (videoId: string) => {
    setIsPlaying(videoId);
    setIsAutoPlay(false);
  };

  const currentVideo = videos[currentIndex];

  // Generate JSON-LD structured data for SEO
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "Sky Vision Multimedia - AV Equipment Portfolio",
    "description": "Watch our premium LED walls, displays, and professional AV equipment setups for events across Mumbai",
    "video": videos.map(video => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": `https://skyav.in${video.thumbnail}`,
      "uploadDate": new Date().toISOString(),
      "duration": `PT${video.duration.replace(':', 'M')}S`,
      "contentUrl": `https://skyav.in${video.videoUrl}`,
      "embedUrl": `https://skyav.in${video.videoUrl}`,
      "category": video.category
    }))
  };

  return (
    <>
      <Helmet>
        <title>Our Work - LED Wall & AV Equipment Portfolio | Sky Vision Multimedia</title>
        <meta name="description" content="Watch our premium LED walls, LED displays, and professional AV equipment in action. See real event setups across Mumbai, Navi Mumbai, Thane & Pune." />
        <meta name="keywords" content="LED wall videos, LED display portfolio, AV equipment showcase, event setup videos, LED screen rental Mumbai, professional AV setup" />
        <meta property="og:title" content="Watch Our Work - LED Wall & AV Equipment Portfolio" />
        <meta property="og:description" content="See our premium LED walls and AV equipment in action at real events" />
        <meta property="og:type" content="video.other" />
        <meta property="og:image" content={`https://skyav.in${currentVideo.thumbnail}`} />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content="Sky Vision Multimedia - Our Work" />
        <meta name="twitter:description" content="Premium LED walls and AV equipment for events" />
        <meta name="twitter:image" content={`https://skyav.in${currentVideo.thumbnail}`} />
        <link rel="canonical" href="https://skyav.in/#videos" />
        <script type="application/ld+json">
          {JSON.stringify(videoStructuredData)}
        </script>
      </Helmet>

      <section 
        className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-100 to-red-100"
        aria-label="Video Gallery Section"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5a3a2a]">
              Watch Our Work
            </h2>
            <p className="text-lg text-[#6b4a3a] max-w-2xl mx-auto">
              Experience our premium AV equipment in action - LED walls, displays, and professional setups for unforgettable events
            </p>
          </div>

          {/* Main Video Carousel */}
          <div className="relative group">
            <div className="glass-card rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-2xl">
              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-[#d4b5a0] to-[#c9a88a]">
                {isPlaying === currentVideo.id ? (
                  <video
                    src={currentVideo.videoUrl}
                    title={currentVideo.title}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    playsInline
                  />
                ) : (
                  <>
                    <video
                      src={currentVideo.thumbnail}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Play Button */}
                    <button
                      onClick={() => handlePlayVideo(currentVideo.id)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                      aria-label={`Play ${currentVideo.title}`}
                    >
                      <div className="w-20 h-20 rounded-full terracotta-gradient flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover/play:scale-110">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </button>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-semibold mb-2">
                        {currentVideo.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {currentVideo.title}
                      </h3>
                      <p className="text-white/90 mb-2">{currentVideo.description}</p>
                      <span className="text-sm text-white/80">Duration: {currentVideo.duration}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* Autoplay Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-2 shadow-lg hover:bg-white transition-all duration-300"
              aria-label={isAutoPlay ? "Pause autoplay" : "Enable autoplay"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-[#5a3a2a]">Auto</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-[#5a3a2a]">Manual</span>
                </>
              )}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(null);
                }}
                className={`relative aspect-video rounded-xl overflow-hidden group/thumb transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-primary shadow-xl scale-105"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
                aria-label={`Select ${video.title}`}
              >
                <video
                  src={video.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                  <Play className="w-8 h-8 text-white" fill="white" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-semibold line-clamp-2">
                    {video.title}
                  </p>
                  <span className="text-white/80 text-xs">{video.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(null);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 terracotta-gradient"
                    : "w-2 bg-[#c9a88a] hover:bg-primary"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoCarousel;
