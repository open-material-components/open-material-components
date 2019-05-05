import { css, html } from '@lion/core';
import { LionTextarea } from '@lion/textarea';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcTextarea extends OmcFieldMixin(LionTextarea) {
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
