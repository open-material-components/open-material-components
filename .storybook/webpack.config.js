const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

const { createReplaceLoaders, createReplaceLoader } = require('./createReplaceLoaders');

const myTagRules = createReplaceLoaders({
  prefix: 'omc',
});

module.exports = ({ config }) => {
  const newConfig = defaultConfig({
    config,
    transpilePackages: ['lit-html', 'lit-element', '@open-wc', 'autosize', '@lion'],
  });

  newConfig.module.rules = [...newConfig.module.rules, ...myTagRules];

  return newConfig;
};
