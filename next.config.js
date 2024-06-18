/** @type {import('next').NextConfig} */

// Example of removing SWC configuration in next.config.js
const nextConfig = {
  reactStrictMode: false,
  // Remove or comment out SWC-related configurations
  // swcMinify: true,
  // terser: {
  //   terserOptions: {
  //     compress: true,
  //     mangle: true,
  //   },
  // },
};

module.exports = nextConfig;

