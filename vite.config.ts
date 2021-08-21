import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import VitePluginLinaria from 'vite-plugin-linaria'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePluginLinaria(),
    legacy({
      polyfills: true,
      renderLegacyChunks: false
    })
  ]
})
