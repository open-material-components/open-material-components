import { css, html } from '@lion/core';
import { LionCheckboxGroup } from '@lion/checkbox-group';
import { OmcFieldMixin } from '@omc/field-mixin';

export class OmcCheckboxGroup extends OmcFieldMixin(LionCheckboxGroup) {
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
