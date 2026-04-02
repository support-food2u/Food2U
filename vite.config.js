import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: 'autoUpdate',

      manifest: {

        name: "Food2U",

        short_name: "Food2U",

        description: "Food ordering platform",

        theme_color: "#1B5FCC",

        background_color: "#F5F0E8",

        display: "standalone",

        icons: [

          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }

        ]

      }

    })

  ]

})