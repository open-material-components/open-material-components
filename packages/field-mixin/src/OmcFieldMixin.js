import { dedupeMixin, css, html } from '@lion/core';
import '@omc/validation-feedback/omc-validation-feedback.js';

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

const backgroundColor = css`#f5f5f5`;

export const OmcFieldMixin = dedupeMixin(
  superclass =>
    // eslint-disable-next-line
    class OmcFieldMixin extends superclass {
      get slots() {
        return Object.assign(super.slots, {
          feedback: () => document.createElement('omc-validation-feedback'),
        });
      }

      static get styles() {
        return [
          super.styles,
          constants,
          inputResets,
          css`
            .input-group {
              height: 56px;
              position: relative;
              display: flex;
            }

            :host .input-group::after {
              display: block;
              position: absolute;
              content: '';
              bottom: 0;
              height: 2px;
              width: 100%;
              transform: scale(0);
              transition: transform 250ms;
              background-color: var(--primary-color);
            }

            :host(.state-focused) .input-group::after {
              transform: scale(1);
            }

            .form-field__label {
              position: absolute;
              display: flex;
              align-items: center;
              padding: 0 12px;
              pointer-events: none;
            }

            .input-group {
              height: 100%;
              background-color: ${backgroundColor};
              border-radius: 4px 4px 0 0;
              padding: 21px 0 5px 0;
              box-sizing: border-box;
            }

            .input-group__container {
              height: 100%;
              display: flex;
            }

            .input-group__container > .input-group__input {
              height: 100%;
            }

            :host ::slotted(input) {
              box-sizing: border-box;
              height: 30px;
              width: 100%;
              border: none;
              padding: 0 12px;
              outline: none;
              background-color: ${backgroundColor};
            }

            .form-field__label {
              transition: transform 250ms ease-in-out;
              /* TODO */
              color: gray;
            }

            :host(.state-filled) .form-field__label,
            :host(.state-focused) .form-field__label {
              transform: translateY(-90%) translateX(-15%) scale(0.7);
              color: var(--primary-color);
            }
          `,
        ];
      }

      inputGroupTemplate() {
        return html`
          <div class="input-group">
            ${this.labelTemplate()} ${this.inputGroupBeforeTemplate()}
            <div class="input-group__container">
              ${this.inputGroupPrefixTemplate()} ${this.inputGroupInputTemplate()}
              ${this.inputGroupSuffixTemplate()}
            </div>
            ${this.inputGroupAfterTemplate()}
          </div>
        `;
      }

      render() {
        return html`
          ${this.inputGroupTemplate()} ${this.helpTextTemplate()} ${this.feedbackTemplate()}
        `;
      }
    },
);
