import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/rsa-styling-and-theming-alerts/",
  plugins: [react()],
});
