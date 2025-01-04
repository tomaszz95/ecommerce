/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextpc',
                port: '10000',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
