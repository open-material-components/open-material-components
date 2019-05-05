import { css, html } from '@lion/core';
import { LionInputDate } from '@lion/input-date';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcInputDate extends OmcFieldMixin(LionInputDate) {
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
