import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/TODO-with-Redux-With-Vite-React',
  plugins: [react()],
})
