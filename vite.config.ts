import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [react(), 
    libInjectCss(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist/types',
    }),],
  
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CamelUI',
      fileName: (format) => `camel.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
