import { css, html } from '@lion/core';
import { LionInputEmail } from '@lion/input-email';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcInputEmail extends OmcFieldMixin(LionInputEmail) {
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
