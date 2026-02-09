import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// For GitHub Pages: set base to repo name if deploying to username.github.io/repo-name/
// Leave as '/' for custom domains or username.github.io
// Using '/' for custom domain: www.openassociation.org
const base = process.env.GITHUB_PAGES === 'true' 
  ? (process.env.BASE_PATH || '/')
  : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "client", "index.html"),
        404: path.resolve(import.meta.dirname, "client", "404.html"),
      },
    },
  },
  publicDir: path.resolve(import.meta.dirname, "client/public"),
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
