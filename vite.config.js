import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js}',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  server: {
    fs: {
      strict: false,
      allow: ['..']
    },
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      charset: 'utf8'
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    target: 'es2018',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['@vitejs/plugin-react']
        }
      }
    }
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});