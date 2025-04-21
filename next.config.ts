import { NextConfig } from 'next'; // Asegúrate de tener este import si necesitas tipado explícito

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
