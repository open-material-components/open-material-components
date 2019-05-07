import { configure } from '@storybook/polymer';
import '@storybook/addon-console';

// const req = require.context("../stories", true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

configure(() => {
  return require('../packages/button/stories/index.stories.js');
}, module);
