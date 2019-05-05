import { css, html } from '@lion/core';
import { LionInputIban } from '@lion/input-iban';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcInputIban extends OmcFieldMixin(LionInputIban) {
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
