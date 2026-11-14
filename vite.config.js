import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Must match the repo name so assets resolve at saucesun.github.io/Myportfolio_Tamboboy/
export default defineConfig({
  base: '/Myportfolio_Tamboboy/',
  plugins: [react()],
});
