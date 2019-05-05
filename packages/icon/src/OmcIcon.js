import { css, html } from '@lion/core';
import { LionIcon } from '@lion/icon';

export class OmcIcon extends LionIcon {
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
