import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input-iban.js';

storiesOf('OmcInputIban|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input-iban></omc-input-iban>
  `,
);
