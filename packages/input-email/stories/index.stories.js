import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input-email.js';

storiesOf('OmcInputEmail|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input-email></omc-input-email>
  `,
);
