import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // This stays the same—Vite will emit all URLs under /journey-to-psle-bootcamp-bundles/
  base: '/journey-to-psle-bootcamp-bundles/',

  // Add a "build" block so that Vite writes into public/ instead of dist/
  build: {
    // Tell Vite: "put everything into public/journey-to-psle-bootcamp-bundles/"
    outDir: 'public/journey-to-psle-bootcamp-bundles',
    // By default, Vite will wipe out outDir on each build.
    // We only want to erase the contents of
    // public/journey-to-psle-bootcamp-bundles (not the rest of public/).
    // So set emptyOutDir: false—this prevents Vite from deleting `public/` as a whole.
    emptyOutDir: false,
  },

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
