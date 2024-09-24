/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
    output: 'export',
    basePath: '/mlsa-miet',
};

export default nextConfig;
