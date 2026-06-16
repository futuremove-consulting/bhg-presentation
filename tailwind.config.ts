import type { Config } from 'tailwindcss';
import tailwindPreset from '@futuremove-consulting/config/tailwind.preset';

const config: Config = {
  presets: [tailwindPreset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../futuremove/archive/03-legacy-design-system/packages/ui/src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
};

export default config;