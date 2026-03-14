import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repositoryName = 'Personal-Website-Code'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${repositoryName}/` : '/',
  plugins: [react()],
}))
