import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: './',  // Ensure relative asset paths in production
    plugins: [react()]
})
