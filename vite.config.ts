import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three-core';
          if (id.includes('node_modules/@react-three')) return 'three-react';
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
      input: {
        home: resolve(rootDir, 'index.html'),
        officers: resolve(rootDir, 'officers.html'),
        events: resolve(rootDir, 'events.html'),
        membership: resolve(rootDir, 'membership.html'),
        contact: resolve(rootDir, 'contact.html'),
      },
    },
  },
});
