import { css, html } from '@lion/core';
import { LionForm } from '@lion/form';

export class OmcForm extends LionForm {
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
