import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-auth'],  // Fuerza transpilar next-auth beta
  experimental: {
    esmExternals: 'loose',  // Arregla module resolution
  },
}

module.exports = nextConfig


export default nextConfig;
