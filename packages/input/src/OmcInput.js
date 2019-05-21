import { css } from '@lion/core';
import { LionInput } from '@lion/input';
import { OmcFieldMixin } from '@omc/field-mixin';

/**
 * TODO:
 *
 * placeholder color
 * exact placement of label
 * outlines input
 * leading icon
 * trailing icon
 * help message
 * error message
 * background color should be darker
 *
 * dense text fields
 */

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
          /* TODO: how high? */
          min-height: 100px;
          position: relative;
        }

        /* input */
        .input-group {
          height: 55px;
          /* TODO: Material color */
          background-color: #eee;
          position: relative;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom: 1px solid rgba(0,0,0,.42);
        }

        .input-group__container {
          height: 100%;
        }

        :host ::slotted(input) {
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          border: none;
          outline: none;
          padding: 0 12px;
          background-color: transparent;
        }

        /* input border */
        .input-group::after {
          display: block;
          position: absolute;
          bottom: 0;
          bottom: -1px;
          content: '';
          height: 2px;
          width: 100%;
          transform: scale(0);
          transition: transform 250ms;
          background-color: var(--primary-color);
        }

        :host(.state-focused) .input-group::after,
        :host(.state-error) .input-group::after {
          transform: scale(1);
        }

        :host(.state-error) .input-group::after {
          /* TODO: Material color */
          background-color: #b00020;
        }

        /* label */
        .form-field__label {
          position: absolute;
          z-index: 1;
          top: 18px;
          left: 12px;
          pointer-events: none;
          color: gray;
          transition: transform 150ms ease-in-out;
          transform: translateY(0%) scale(1);
          transform-origin: top left;
        }

        :host(.state-focused) .form-field__label,
        :host(.state-filled) .form-field__label {
          transform: translateY(-70%) scale(0.75);
        }

        :host(.state-focused) .form-field__label {
          color: var(--primary-color);
        }

        :host(.state-error) .form-field__label {
          /* TODO: Material color */
          color: #b00020;
        }

        /* messages */
        .form-field__feedback {
          /* TODO */
          font-size: 12px;
          padding: 4px 12px;
        }

        :host(.state-error) .form-field__feedback {
          /* TODO: Material color */
          color: #b00020;
        }
      `,
    ];
  }
}
