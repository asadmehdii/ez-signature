/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['dfljpgviidxdznbdyyop.supabase.co'],
  },
  // Disable static export to prevent prerendering issues
  output: 'standalone',
  // Disable static optimization for pages with useSearchParams
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Skip static generation for dynamic routes
  generateStaticParams: false,
};

module.exports = nextConfig;
