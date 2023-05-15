import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'netlify.toml',
          dest: '.'
        },
        {
          src: 'src/asset/events-img/',
          dest: 'asset/'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src')
    }
  },
})
