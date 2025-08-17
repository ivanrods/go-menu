import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "u9a6wmr3as.ufs.sh",
        pathname: "/**", // Permite qualquer caminho
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**", // Permite qualquer caminho
      },
    ],
  },
};

export default nextConfig;
