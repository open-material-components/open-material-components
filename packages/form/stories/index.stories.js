import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-form.js';

storiesOf('OmcForm|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-form></omc-form>
  `,
);
