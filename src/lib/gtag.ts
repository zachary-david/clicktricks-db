export const GA_TRACKING_ID = 'G-DKM088Y0ZF';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: Record<string, string | number | boolean> = {
      event_category: category,
    };
    
    if (label) config.event_label = label;
    if (value !== undefined) config.value = value;
    
    window.gtag('event', action, config);
  }
};