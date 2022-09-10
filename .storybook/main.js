module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
    },
  },
  staticDirs: ["../public"],
};
