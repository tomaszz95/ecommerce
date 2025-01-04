/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextpc.onrender.com',
                pathname: '/photos/**',
            },
        ],
    },
}

export default nextConfig
