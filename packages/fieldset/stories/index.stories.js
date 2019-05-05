import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-fieldset.js';

storiesOf('OmcFieldset|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-fieldset></omc-fieldset>
  `,
);
