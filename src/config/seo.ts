// SEO Configuration for Sky Vision Multimedia
export const seoConfig = {
  siteName: "Sky Vision Multimedia",
  siteUrl: "https://skyav.in",
  defaultTitle: "Sky Vision Multimedia - Professional AV Equipment Rental in Mumbai",
  defaultDescription: "Premium Projector, LED Wall, Sound System & AV Equipment Rental in Mumbai. 15+ years experience. Serving Mumbai, Navi Mumbai, Thane, Pune. Call +91 86559 73366",
  defaultKeywords: "projector rental mumbai, LED wall rental, sound system rental, karaoke rental mumbai, AV equipment rental, event equipment rental mumbai, corporate AV rental",
  twitterHandle: "@skyavin",
  instagramHandle: "@skyav.in",
  
  // Open Graph defaults
  ogType: "website",
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  // Structured Data
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sky Vision Multimedia",
    "url": "https://skyav.in",
    "logo": "https://skyav.in/logo.png",
    "image": "https://skyav.in/og-image.jpg",
    "description": "Audio-Video Equipment Rental Company in Mumbai",
    "telephone": "+918655973366",
    "email": "sky.av.rentals@gmail.com",
    "priceRange": "$$",
    "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Lonavala", "Surat", "Goa"],
    "sameAs": [
      "https://www.instagram.com/skyav.in/",
      "https://twitter.com/skyavin",
      "https://www.facebook.com/skyavin"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road",
      "addressLocality": "Dahisar West",
      "addressRegion": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2544,
      "longitude": 72.8622
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918655973366",
      "contactType": "Customer Service",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  },
  
  // Local Business structured data
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skyav.in/#organization",
    "name": "Sky Vision Multimedia",
    "image": "https://skyav.in/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road",
      "addressLocality": "Dahisar West",
      "addressRegion": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2544,
      "longitude": 72.8622
    },
    "url": "https://skyav.in",
    "telephone": "+918655973366",
    "email": "sky.av.rentals@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  }
};

// Page-specific SEO data
export const pageSEO = {
  home: {
    title: "Professional AV Equipment Rental in Mumbai",
    description: "Premium Projector, LED Wall, Sound System & Karaoke Rental in Mumbai. 15+ years trusted service. Serving Mumbai, Navi Mumbai, Thane, Pune. Call +91 86559 73366 for instant quote.",
    keywords: "projector rental mumbai, LED wall rental mumbai, sound system rental, karaoke rental, AV equipment rental, event equipment rental, corporate AV rental mumbai"
  },
  services: {
    title: "AV Equipment Rental Services Mumbai",
    description: "Professional Projector Rental, LED Wall Rental, Sound System, Karaoke & Complete AV Solutions for Events, Weddings, Corporate Functions across Mumbai, Navi Mumbai, Thane, Pune.",
    keywords: "projector rental, LED screen rental, PA system rental, karaoke rental, wedding AV, corporate events, event equipment mumbai"
  },
  portfolio: {
    title: "Our Work - Event Portfolio",
    description: "Browse our portfolio of successful events across Mumbai. Wedding setups, corporate events, concerts, and more. 150+ satisfied clients with 4.8★ rating.",
    keywords: "event portfolio, wedding AV setup, corporate events mumbai, event photos, client projects"
  },
  videos: {
    title: "Video Gallery - AV Equipment in Action",
    description: "Watch our AV equipment in action at weddings, corporate events, and celebrations. See LED walls, sound systems, and complete event setups across Mumbai.",
    keywords: "event videos, AV setup videos, wedding videos, LED wall demo, sound system demo, event equipment mumbai"
  },
  contact: {
    title: "Contact Us - Get Instant Quote",
    description: "Contact Sky Vision Multimedia for AV equipment rental in Mumbai. Call +91 86559 73366 or email sky.av.rentals@gmail.com for instant quotes and bookings.",
    keywords: "contact, booking, quote, AV rental enquiry, equipment rental mumbai, get quote"
  }
};
