import { css, html } from '@lion/core';
import { LionFieldset } from '@lion/fieldset';

export class OmcFieldset extends LionFieldset {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          /* your overrides */
        }
      `,
    ];
  }
}
