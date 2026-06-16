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
      '@futuremove/ui': path.resolve(__dirname, '../../futuremove/core/fmds/packages/ui/src'),
      '@futuremove/config': path.resolve(__dirname, '../../futuremove/core/fmds/packages/config/src'),
      '@futuremove/shared': path.resolve(__dirname, '../../futuremove/core/fmds/packages/shared/src'),
    },
  },
});
