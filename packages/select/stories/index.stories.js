import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-select.js';

storiesOf('OmcSelect|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-select></omc-select>
  `,
);
