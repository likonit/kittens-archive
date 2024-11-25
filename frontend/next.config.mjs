/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kittens-archive.site',
            port: '',
            pathname: '/assets/preview-photos/**',
          },
        ],
    }
};

export default nextConfig;
