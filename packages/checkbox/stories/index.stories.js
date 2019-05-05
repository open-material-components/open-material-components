import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-checkbox.js';

storiesOf('OmcCheckbox|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-checkbox></omc-checkbox>
  `,
);
