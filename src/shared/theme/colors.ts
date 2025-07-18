export const COLORS = {
  // Primary colors
  PRIMARY: '#2E2739',
  SECONDARY: '#827D88',
  
  // Text colors
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#827D88',
  
  // Background colors
  BACKGROUND_PRIMARY: '#EFEFEF',
  BACKGROUND_SECONDARY: '#2A2D3A',
  
  // Status colors
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  INFO: '#2196F3',
} as const;

export type ColorKey = keyof typeof COLORS; 