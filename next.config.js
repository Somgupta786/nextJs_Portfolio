/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  terser: {
    // Disable Terser optimization
    terserOptions: {
      compress: false,
      mangle: false,
    },
  }, // <-- Close the 'terser' object properly
};

module.exports = nextConfig;
