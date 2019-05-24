import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-input.js';

storiesOf('Forms|Input Material Extras', module).add(
  'Overview',
  () => html`
    <omc-input label="First Name"></omc-input>
    <omc-input label="First Name" variant="outlined"></omc-input>
  `,
);
