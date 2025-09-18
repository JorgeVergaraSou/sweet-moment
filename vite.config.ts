//vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detecta si estamos en producción para usar la subruta correcta
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isProduction ? "/sweet-moment-candy/" : "/", // GitHub Pages usa subruta, dev usa /
});


/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
})*/