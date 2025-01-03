/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
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
