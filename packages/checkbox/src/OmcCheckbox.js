import { css, html } from '@lion/core';
import { LionCheckbox } from '@lion/checkbox';

export class OmcCheckbox extends LionCheckbox {
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
