/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    experimental: {
        swcPlugins: [["@effector/swc-plugin", {}]],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
