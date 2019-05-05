import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input-date.js';

storiesOf('OmcInputDate|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input-date></omc-input-date>
  `,
);
