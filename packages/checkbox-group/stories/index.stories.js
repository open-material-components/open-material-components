import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-checkbox-group.js';

storiesOf('OmcCheckboxGroup|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-checkbox-group></omc-checkbox-group>
  `,
);
