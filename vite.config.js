import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import marko from "@marko/run/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    marko(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
   
  ]
});
