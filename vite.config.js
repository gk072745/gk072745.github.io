import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        // Use Dart Sass modern API (avoids legacy `render` deprecation warning).
        api: 'modern-compiler',
      },
    },
  },
})
