import { css, html } from '@lion/core';
import { LionInput } from '@lion/input';
import { OmcFieldMixin } from '@omc/field-mixin';

const constants = css`
  :host {
    --primary-color: #6200ee;
    --primary-color-contrast: white;
    --disabled-primary-color: gray;
    --disabled-secondary-color: lightgray;
  }
`;

// display: flex and flex 1 1 auto are set by lion
const inputResets = css`
  .input-group__container > .input-group__input {
    display: block;
  }
`;

export class OmcInput extends OmcFieldMixin(LionInput) {
  static get styles() {
    return [
      super.styles,
      constants,
      inputResets,
      css`
        :host {
          width: 280px;
          height: 56px;
          background-color: lightgray;
          position: relative;
        }

        :host::after {
          display: block;
          content: '';
          bottom: 0;
          height: 2px;
          width: 100%;
          transform: scale(0);
          transition: transform 250ms;
          background-color: var(--primary-color);
        }

        :host(.state-focused)::after {
          transform: scale(1);
        }

        .form-field__label {
          position: absolute;
          display: flex;
          align-items: center;
          padding: 0 12px;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .input-group {
          height: 100%;
        }

        .input-group__container {
          height: 100%;
        }

        .input-group__container > .input-group__input {
          height: 100%;
        }

        :host ::slotted(input) {
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          border: none;
          padding: 0 12px;
          outline: none;
          /* TODO */
          background-color: lightgray;
        }

        :host ::slotted(label) {
          transition: transform 250ms ease-in-out;
          /* TODO */
          color: gray;
        }

        :host(.state-focused) ::slotted(label) {
          transform: translateY(-90%) translateX(-15%) scale(0.70);
          color: var(--primary-color);
        }
      `,
    ];
  }
}
