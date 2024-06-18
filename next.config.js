/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  terser: {
    // Disable Terser optimization
    terserOptions: {
      compress: false,
      mangle: false,
    },
  }, // <-- Close the 'terser' object properly
};

modules.exports = nextConfig;
