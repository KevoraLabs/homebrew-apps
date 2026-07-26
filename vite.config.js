import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      cpSync(resolve('assets'), resolve('dist/assets'), { recursive: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  server: {
    host: 'localhost',
    port: 8088,
  },
});
