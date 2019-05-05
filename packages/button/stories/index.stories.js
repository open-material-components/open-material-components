import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-button.js';

storiesOf('OmcButton|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-button></omc-button>
  `,
);
