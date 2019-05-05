import { css, html } from '@lion/core';
import { LionRadioGroup } from '@lion/radio-group';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcRadioGroup extends OmcFieldMixin(LionRadioGroup) {
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
