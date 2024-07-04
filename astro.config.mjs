import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

        // ... Otras configuraciones
        scripts: [
          { type: 'module', src: '/@modules/bootstrap-icons/dist/font/bootstrap-icons.min.mjs' },
        ],
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
        }
});

