/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "www.investnicp.com"
            }
        ]
    }
};

export default nextConfig;
