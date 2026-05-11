import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/loppet/banor-klasser",
        destination: "/banor-klasser",
        permanent: true,
      },
      {
        source: "/loppet/schema",
        destination: "/pm",
        permanent: true,
      },
      {
        source: "/loppet",
        destination: "/banor-klasser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
