/**
 * Global type augmentations for browser globals not covered by @types/web.
 */

interface Window {
  /**
   * Google Tag Manager / gtag.js data layer queue.
   * Declared here so ContactForm.tsx and any other client code can push
   * events without TypeScript complaining about an unknown property.
   * The array type is intentionally loose (unknown[]) because GTM accepts
   * arbitrary objects, arrays, and gtag() argument tuples.
   */
  dataLayer: unknown[];
  /**
   * Sentinel set by GoogleAnalytics.tsx after first load to prevent
   * double-injection of gtag.js when Strict Mode double-mounts the
   * effect in dev or when the component remounts on route change.
   */
  __ga_loaded__?: boolean;
}
