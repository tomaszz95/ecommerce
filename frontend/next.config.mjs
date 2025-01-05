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
        // remotePatterns: [
        //     {
        //         protocol: 'http',
        //         hostname: 'localhost',
        //         port: '5000',
        //         pathname: '/**',
        //     },
        // ],
    },
}

export default nextConfig
