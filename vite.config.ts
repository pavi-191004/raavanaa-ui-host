import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
   federation({
            name: 'host-app',
            remotes: {
                uistudent: "http://localhost:5174/remoteEntry.js",
            },
            shared: ['react','react-dom']
        })  
  ],
  build:{
    target:'esnext'
  }
})
