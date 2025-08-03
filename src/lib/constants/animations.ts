export const ANIMATIONS = {
  durations: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '700ms',
  },
  easings: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
  delays: {
    stagger: 0.1,
    section: 0.2,
    card: 0.05,
  },
} as const;