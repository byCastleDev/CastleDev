import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // ... Otras configuraciones
  scripts: [{
    type: 'module',
    src: '/@modules/bootstrap-icons/dist/font/bootstrap-icons.min.mjs'
  }],
  site: 'https://tu_usuario.netlify.app',
  // Cambia esto si tienes un dominio personalizado
  adapter: vercel(),
  // pages: {
  //   '/': 'src/pages/index.astro',  // Ejemplo de configuración de ruta para index.astro
  //   // Añade otras rutas según sea necesario para tus otros archivos Astro
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "bootstrap/scss/bootstrap";`
        }
      }
    }
  },
  output: "server"
});