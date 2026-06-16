import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    alias: {
      '@': path.resolve(__dirname, './'),
      '@futuremove-consulting/ui': path.resolve(__dirname, '../../futuremove/archive/03-legacy-design-system/packages/ui/src'),
      '@futuremove-consulting/config': path.resolve(__dirname, '../../futuremove/archive/03-legacy-design-system/packages/config/src'),
      '@futuremove-consulting/shared': path.resolve(__dirname, '../../futuremove/archive/03-legacy-design-system/packages/shared/src'),
    },
  },
});
