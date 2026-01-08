import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()], 
  
  // Configuración de despliegue
  site: 'https://DavidAragonRodriguez.github.io',
  base: '/porfolio-davidar',
});