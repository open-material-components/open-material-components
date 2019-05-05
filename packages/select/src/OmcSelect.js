import { css, html } from '@lion/core';
import { LionSelect } from '@lion/select';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcSelect extends OmcFieldMixin(LionSelect) {
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
