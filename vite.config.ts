import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import manifest from "./manifest.json";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), crx({ manifest })]
});
