import { css, html } from '@lion/core';
import { LionInput } from '@lion/input';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcInput extends OmcFieldMixin(LionInput) {
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
