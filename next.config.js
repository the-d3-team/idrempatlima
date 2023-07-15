// next.config.js
module.exports = {
  productionBrowserSourceMaps: true,
  webpack(config, { isServer }) {
    if (isServer) {
      config.module.rules.push({
        test: /\.(svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash].[ext]",
          },
        },
      });
    }

    return config;
  },
};
