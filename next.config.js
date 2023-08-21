/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    logger: {
      warn: (message) => console.warn(message),
      debug: (message) => console.log(message),
    },
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
