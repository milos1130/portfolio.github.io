import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import { plugins } from "./.eslintrc.cjs";

export default defineConfig({
    plugins: [react()],
    base: "/vite-deploy"
})