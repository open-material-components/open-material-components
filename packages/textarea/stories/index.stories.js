import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-textarea.js';

storiesOf('OmcTextarea|Material Extras', module).add(
  'Overview',
  () => html`
    <omc-textarea></omc-textarea>
  `,
);
