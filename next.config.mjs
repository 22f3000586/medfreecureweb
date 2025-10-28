/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  async redirects() {
    return [
      {
        source: '/therapies',
        destination: '/services',
        permanent: true
      }
    ]
  }
}

export default nextConfig
