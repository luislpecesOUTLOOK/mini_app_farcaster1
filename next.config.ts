import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  esmExternals: true, // ✅ soportado
}
};

export default nextConfig;
