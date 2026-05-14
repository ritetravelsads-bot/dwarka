import type { NextConfig } from "next";

// WordPress blog origin — the server where your WordPress /blogs install lives.
// Set WORDPRESS_URL in your environment variables, e.g.:
//   WORDPRESS_URL=https://blog.dwarkaexpresswayncr.com
// If the WordPress install runs on the same cPanel server as the old PHP site
// you can point this to that origin. Next.js will proxy /blogs/* to it transparently.
const WORDPRESS_URL = process.env.WORDPRESS_URL || "https://www.dwarkaexpresswayncr.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async rewrites() {
    return [
      // Pass all /blogs and /blogs/* requests through to WordPress.
      // Next.js will never handle these routes — they go directly to WordPress.
      {
        source: "/blogs",
        destination: `${WORDPRESS_URL}/blogs`,
      },
      {
        source: "/blogs/:path*",
        destination: `${WORDPRESS_URL}/blogs/:path*`,
      },
    ];
  },
};

export default nextConfig;
