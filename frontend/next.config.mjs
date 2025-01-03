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
    webpack(config) {
        config.module.rules.push({
            test: /\.(jpg|jpeg|png|gif|bmp|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash][ext]',
            },
        })
        return config
    },
}

export default nextConfig
