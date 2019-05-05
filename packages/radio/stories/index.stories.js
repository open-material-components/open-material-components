import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-radio.js';

storiesOf('OmcRadio|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-radio></omc-radio>
  `,
);
