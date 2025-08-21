import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        UIComponents: "http://localhost:5174/assets/remoteEntry.js",
        admin_fe:"http://localhost:5175/assets/remoteEntry.js",
        ui_student: "http://localhost:5176/assets/remoteEntry.js",
        raavana_ui_recruiter: "http://localhost:5177/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
