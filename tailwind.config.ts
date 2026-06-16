import type { Config } from 'tailwindcss';
import tailwindPreset from '@futuremove/config/tailwind';

const config: Config = {
  presets: [tailwindPreset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../futuremove/core/fmds/packages/ui/src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
};

export default config;