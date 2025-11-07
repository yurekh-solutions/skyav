// Web Performance Monitoring
// Tracks Core Web Vitals for Google Ads Quality Score

import { trackEvent } from './tracking';

// Type definitions for Performance APIs
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Core Web Vitals thresholds
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
};

// Rate metric value
const getRating = (
  value: number,
  thresholds: { good: number; poor: number }
): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Track Core Web Vitals
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    const lcp = lastEntry.startTime;

    trackEvent('web_vitals', {
      metric_name: 'LCP',
      metric_value: Math.round(lcp),
      metric_rating: getRating(lcp, THRESHOLDS.LCP),
    });
  });

  try {
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    // Browser doesn't support LCP
  }

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const perfEntry = entry as PerformanceEventTiming;
      const fid = perfEntry.processingStart - perfEntry.startTime;

      trackEvent('web_vitals', {
        metric_name: 'FID',
        metric_value: Math.round(fid),
        metric_rating: getRating(fid, THRESHOLDS.FID),
      });
    });
  });

  try {
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // Browser doesn't support FID
  }

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const layoutShift = entry as LayoutShiftEntry;
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value;
      }
    });

    trackEvent('web_vitals', {
      metric_name: 'CLS',
      metric_value: Math.round(clsValue * 1000) / 1000,
      metric_rating: getRating(clsValue, THRESHOLDS.CLS),
    });
  });

  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    // Browser doesn't support CLS
  }

  // Navigation timing metrics
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const navigationStart = timing.navigationStart;

        // Time to First Byte
        const ttfb = timing.responseStart - navigationStart;
        trackEvent('web_vitals', {
          metric_name: 'TTFB',
          metric_value: ttfb,
          metric_rating: getRating(ttfb, THRESHOLDS.TTFB),
        });

        // Page Load Time
        const loadTime = timing.loadEventEnd - navigationStart;
        trackEvent('page_performance', {
          metric_name: 'Load_Time',
          metric_value: loadTime,
          page_load_time_ms: loadTime,
        });

        // DOM Content Loaded
        const domContentLoaded = timing.domContentLoadedEventEnd - navigationStart;
        trackEvent('page_performance', {
          metric_name: 'DOM_Content_Loaded',
          metric_value: domContentLoaded,
        });
      }, 0);
    });
  }
};

// Monitor long tasks (tasks taking > 50ms)
export const monitorLongTasks = () => {
  if (typeof window === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Track tasks longer than 50ms
        if (entry.duration > 50) {
          trackEvent('long_task', {
            task_duration: Math.round(entry.duration),
            task_start: Math.round(entry.startTime),
          });
        }
      });
    });

    observer.observe({ type: 'longtask', buffered: true });
  } catch (e) {
    // Browser doesn't support Long Tasks API
  }
};

// Get navigation type (useful for understanding user journey)
export const getNavigationType = (): string => {
  if (typeof window === 'undefined') return 'unknown';

  const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navEntry) {
    return navEntry.type; // 'navigate', 'reload', 'back_forward', 'prerender'
  }

  return 'unknown';
};

// Report all metrics
export const reportWebVitals = () => {
  measureWebVitals();
  monitorLongTasks();

  // Track navigation type
  trackEvent('navigation_type', {
    type: getNavigationType(),
  });
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Start monitoring when page is interactive
    if (document.readyState === 'complete') {
      reportWebVitals();
    } else {
      window.addEventListener('load', reportWebVitals);
    }
  }
};
