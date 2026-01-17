/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@octokit/rest'],
  },
  
  // Serve MkDocs static files from /docs
  // The docs are built to public/docs during the build process
  async rewrites() {
    return [
      // Rewrite /docs to serve index.html
      {
        source: '/docs',
        destination: '/docs/index.html',
      },
    ];
  },
  
  // Ensure docs directory isn't processed by Next.js
  async headers() {
    return [
      {
        source: '/docs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
