/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  env: {
    password: process.env.password,
    dummyEmail: process.env.dummyEmail,
    realEmail: process.env.realEmail,
  },
};
