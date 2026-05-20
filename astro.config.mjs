import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gob.co.nz',
  vite: {
    plugins: [tailwindcss()],
  },
});
