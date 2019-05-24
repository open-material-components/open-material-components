import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-textarea.js';

storiesOf('Forms|Textarea Material Extras', module).add(
  'Overview',
  () => html`
    <omc-textarea></omc-textarea>
    <omc-textarea label="Outlined" variant="outlined"></omc-textarea>
  `,
);
