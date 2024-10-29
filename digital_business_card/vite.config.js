import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/card/", // replace 'repo-name' with your actual repository name
  plugins: [react()],
})
