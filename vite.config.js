import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Because the site is served from the root of a custom domain
// (brainhealthtrust.org), the base path is "/". If this were served from
// a project subpath like username.github.io/repo/, base would be "/repo/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
