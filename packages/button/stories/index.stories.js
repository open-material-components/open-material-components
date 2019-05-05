import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../omc-button.js';

storiesOf('OmcButton|Material Extras', module)
  .add(
    'Text button',
    () => html`
      <omc-button>Click here</omc-button>
      <omc-button>Show</omc-button>
      <omc-button disabled>Disabled</omc-button>
    `,
  )
  .add(
    'Outlined button',
    () => html`
      <omc-button outlined>Click here</omc-button>
      <omc-button outlined>Show</omc-button>
      <omc-button outlined disabled>Disabled</omc-button>
    `,
  )
  .add(
    'Contained button',
    () => html`
      <omc-button contained>Click here</omc-button>
      <omc-button contained>Show</omc-button>
      <omc-button contained disabled>Disabled</omc-button>
    `,
  );
