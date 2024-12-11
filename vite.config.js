import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/EviteOgolpeWEB/",
  define: {
    'process.env': {}, // Garante compatibilidade com algumas dependências que usam `process.env`
  },
});
