import { css, html } from '@lion/core';
import { LionButton } from '@lion/button';

export class OmcButton extends LionButton {
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
