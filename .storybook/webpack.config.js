const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

const { createReplaceLoaders, createReplaceLoader } = require('./createReplaceLoaders');

const tags = [
  'ing-button',
  'ing-checkbox',
  'ing-checkbox-group',
  'ing-field',
  'ing-fieldset',
  'ing-form',
  'ing-icon',
  'ing-input',
  'ing-input-amount',
  'ing-input-date',
  'ing-input-email',
  'ing-input-iban',
  'ing-radio',
  'ing-radio-group',
  'ing-select',
  'ing-steps',
  'ing-step',
  'ing-textarea',
  'ing-tooltip',
];
// Packages we use in stories/index.stories.js
const packages = [
  '@lion/checkbox',
  '@lion/checkbox-group',
  '@lion/fieldset',
  '@lion/form',
  '@lion/form-system',
  '@lion/icon',
  '@lion/input',
  '@lion/input-amount',
  '@lion/input-date',
  '@lion/input-email',
  '@lion/input-iban',
  '@lion/radio',
  '@lion/radio-group',
  '@lion/select',
  '@lion/steps',
  '@lion/textarea',
];

const myTagRules = createReplaceLoaders(tags, packages, 'ing-');

module.exports = ({ config }) => {
  const newConfig = defaultConfig({
    config,
    transpilePackages: ['lit-html', 'lit-element', '@open-wc', 'autosize', '@lion'],
  });

  newConfig.module.rules = [...newConfig.module.rules, ...myTagRules];

  newConfig.module.rules.push(
    createReplaceLoader('@lion/input', [
      { from: '../src/LionInput.js', to: '../../../../forms.js' },
      { from: 'LionInput', to: 'IngInput' },
    ]),
  );

  return newConfig;
};
