import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input.js';

storiesOf('OmcInput|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input></omc-input>
  `,
);
