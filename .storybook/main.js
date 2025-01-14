const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/, ///.*\.(?:le|c|sc)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    };
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['babel-loader', 'vue-svg-loader'],
      // include: path.resolve(__dirname, '../assets/images/icon'),
    });
    return config;
  }
}
