import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {

  console.log('Server URL:', process.env.VITE_REACT_APP_SERVER_URL);

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [react()],
  })
}