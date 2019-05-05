import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input-amount.js';

storiesOf('OmcInputAmount|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input-amount></omc-input-amount>
  `,
);
