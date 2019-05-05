import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-radio-group.js';

storiesOf('OmcRadioGroup|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-radio-group></omc-radio-group>
  `,
);
