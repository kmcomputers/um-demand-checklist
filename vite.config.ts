import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'UM Demand Checklist',
        short_name: 'UM Demand',
        description: 'United Merch fulfillment demand, print, and pack checklist',
        theme_color: '#2c2d71',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
      },
      workbox: {
        // Cache the app shell and assets; always revalidate API calls
        runtimeCaching: [
          {
            urlPattern: /^\/api\/.*/i,
            handler: 'NetworkOnly'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
