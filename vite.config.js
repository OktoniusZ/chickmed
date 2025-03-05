import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    base: "/",
    build: {
        outDir: "public/build", // Laravel looks for assets here
        manifest: true, // Generates manifest.json for Laravel
        rollupOptions: {
            input: "resources/js/app.jsx", // Ensures correct entry file
        },
    },
});
