import { css, html } from '@lion/core';
import { LionInputAmount } from '@lion/input-amount';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcInputAmount extends OmcFieldMixin(LionInputAmount) {
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
