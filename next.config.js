/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
	  unoptimized: true
	},
	transpilePackages: ['@ionic/react'],
}

module.exports = nextConfig
