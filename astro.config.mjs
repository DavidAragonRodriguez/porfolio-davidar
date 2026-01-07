import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()], 
  
  // Configuración de despliegue
  site: 'https://DavidAragonRodriguez.github.io',
  base: '/porfolio-davidar',
});
