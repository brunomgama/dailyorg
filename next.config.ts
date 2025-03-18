import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
        ],
    },
};

export default nextConfig;
