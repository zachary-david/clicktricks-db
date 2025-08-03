export const SPACING = {
  section: {
    padding: 'clamp(3rem, 8vw, 8rem)',
    mobile: '5vw',
    desktop: '8rem',
  },
  container: {
    maxWidth: '7xl',
    padding: 'px-6 lg:px-8',
    paddingX: '1.5rem',
    paddingXLg: '2rem',
  },
  borderWidth: '2px',
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
} as const;