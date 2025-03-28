import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [{ enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */ }) }, react()],
  server: {
    port: 15000,
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router'],
          mantine: ['@mantine/core', '@mantine/hooks'],
        }
      }
    }
  }
})
