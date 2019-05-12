import { css } from '@lion/core';
import { LionCheckboxGroup } from '@lion/checkbox-group';

export class OmcCheckboxGroup extends LionCheckboxGroup {
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
