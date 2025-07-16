import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, '..'); // one level up
  const env = loadEnv(mode, envDir, ''); // '' to load all vars

  return {
    plugins: [react()],
    envDir, // let Vite know about your custom .env directory
    server: {
      port: parseInt(env.FRONTEND_PORT), // this works at build time
    },
    define: {
      'process.env': env, // optional if you use process.env somewhere
    },
  };
});