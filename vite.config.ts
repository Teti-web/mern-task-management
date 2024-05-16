import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@translation": "/src/translation",
    },
  },
});
