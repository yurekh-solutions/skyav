// Google Analytics & Ads Tracking Utilities
// Add your tracking IDs in the environment or directly here

// Type definitions for window tracking objects
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const TRACKING_IDS = {
  GA4: 'G-XXXXXXXXXX', // Replace with your Google Analytics 4 ID
  GOOGLE_ADS: 'AW-XXXXXXXXXX', // Replace with your Google Ads ID
  GOOGLE_ADS_CONVERSION: 'AW-XXXXXXXXXX/YYYYYYYYYY', // Replace with conversion ID
  META_PIXEL: 'XXXXXXXXXX', // Replace with Meta/Facebook Pixel ID
};

type EventParams = Record<string, string | number | boolean | undefined>;

// Google Analytics 4 Event Tracking
export const trackEvent = (eventName: string, eventParams?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', TRACKING_IDS.GA4, {
      page_path: url,
      page_title: title,
    });
  }
};

// Google Ads Conversion Tracking
export const trackConversion = (conversionLabel?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionLabel || TRACKING_IDS.GOOGLE_ADS_CONVERSION,
    });
  }
};

// Track specific user actions for better campaign optimization
export const trackUserAction = {
  // Phone call click
  phoneClick: () => {
    trackEvent('phone_click', {
      event_category: 'engagement',
      event_label: 'phone_number_click',
      value: 1,
    });
  },
  
  // WhatsApp click
  whatsappClick: () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'whatsapp_button_click',
      value: 1,
    });
  },
  
  // Email click
  emailClick: () => {
    trackEvent('email_click', {
      event_category: 'engagement',
      event_label: 'email_click',
      value: 1,
    });
  },
  
  // Contact form submission
  formSubmit: (formName: string) => {
    trackEvent('form_submit', {
      event_category: 'conversion',
      event_label: formName,
      value: 1,
    });
    // Also track as conversion
    trackConversion();
  },
  
  // Service inquiry
  serviceInquiry: (serviceName: string) => {
    trackEvent('service_inquiry', {
      event_category: 'engagement',
      event_label: serviceName,
      service_type: serviceName,
    });
  },
  
  // Video play
  videoPlay: (videoName: string) => {
    trackEvent('video_play', {
      event_category: 'engagement',
      event_label: videoName,
      video_title: videoName,
    });
  },
  
  // Instagram profile visit
  instagramClick: () => {
    trackEvent('instagram_click', {
      event_category: 'social_engagement',
      event_label: 'instagram_profile_visit',
    });
  },
  
  // Quote request
  quoteRequest: () => {
    trackEvent('quote_request', {
      event_category: 'conversion',
      event_label: 'instant_quote_request',
      value: 1,
    });
    trackConversion();
  },
};

// Meta Pixel Tracking
export const trackMetaEvent = (eventName: string, eventParams?: EventParams) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Enhanced E-commerce tracking (if you add pricing/packages)
export const trackProductView = (productName: string, price: number, category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'INR',
      value: price,
      items: [
        {
          item_name: productName,
          item_category: category,
          price: price,
        },
      ],
    });
  }
};

// Track scroll depth for engagement metrics
let scrollTracked = false;
export const trackScrollDepth = () => {
  if (scrollTracked) return;
  
  const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
  
  if (scrollPercentage > 75) {
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      event_label: '75_percent',
      scroll_depth: 75,
    });
    scrollTracked = true;
  }
};

// Initialize tracking on page load
export const initTracking = () => {
  // Add scroll tracking
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', trackScrollDepth);
  }
};
