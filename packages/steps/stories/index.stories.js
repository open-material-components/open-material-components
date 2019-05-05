import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-steps.js';

storiesOf('OmcSteps|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-steps></omc-steps>
  `,
);
