import { css } from '@lion/core';
import { LionRadioGroup } from '@lion/radio-group';

export class OmcRadioGroup extends LionRadioGroup {
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
