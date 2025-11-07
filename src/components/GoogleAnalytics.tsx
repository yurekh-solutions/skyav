import { Helmet } from "react-helmet-async";
import { TRACKING_IDS } from "@/lib/tracking";

interface GoogleAnalyticsProps {
  enabled?: boolean;
}

/**
 * Google Analytics & Ads Integration Component
 * 
 * To activate:
 * 1. Replace tracking IDs in src/lib/tracking.ts with your actual IDs
 * 2. Set enabled={true} when ready to start tracking
 * 
 * Get your IDs from:
 * - Google Analytics: https://analytics.google.com/
 * - Google Ads: https://ads.google.com/
 * - Meta Pixel: https://business.facebook.com/
 */
const GoogleAnalytics = ({ enabled = false }: GoogleAnalyticsProps) => {
  if (!enabled) {
    return null;
  }

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.GA4}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${TRACKING_IDS.GA4}', {
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure'
          });
          
          // Google Ads configuration
          gtag('config', '${TRACKING_IDS.GOOGLE_ADS}');
        `}
      </script>

      {/* Meta/Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${TRACKING_IDS.META_PIXEL}');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${TRACKING_IDS.META_PIXEL}&ev=PageView&noscript=1"
        />`}
      </noscript>

      {/* Google Tag Manager (optional - uncomment if you use GTM) */}
      {/* 
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXX');
        `}
      </script>
      */}
    </Helmet>
  );
};

export default GoogleAnalytics;
