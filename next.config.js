/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/dicoding-mgce-first-project-bucket-1/**',
      },
    ],
  },
};

module.exports = nextConfig;
