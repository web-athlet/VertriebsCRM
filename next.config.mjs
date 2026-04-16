import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
    silenceDeprecations: ['mixed-decls'],
  },
  experimental: {
    optimizePackageImports: [
      'react-bootstrap',
      '@iconify/react',
      'react-apexcharts',
      'apexcharts',
      'simplebar-react',
      'react-toastify',
    ],
  },
}

export default nextConfig
