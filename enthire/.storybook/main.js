module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
      controls: false,
      backgrounds: false
    }
  },
    "@storybook/addon-links",
    "@storybook/preset-create-react-app"
  ]
}

  