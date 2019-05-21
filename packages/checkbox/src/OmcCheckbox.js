import { css, html } from '@lion/core';
import { LionCheckbox } from '@lion/checkbox';

export class OmcCheckbox extends LionCheckbox {
  static get styles() {
    return [
      super.styles,
      css`
        .choice-field__graphic-container {
          display: block;
          box-sizing: border-box;
          width: 18px;
          height: 18px;
          border-radius: 2px;
          border: 2px solid rgba(0, 0, 0, 0.54);
          margin-right: 5px;
        }

        .checkmark {
          opacity: 0;
          transition: opacity 180ms 0s cubic-bezier(0.4, 0, 0.6, 1);
          color: #fff;
        }

        path {
          transition: stroke-dashoffset 180ms 0s cubic-bezier(0.4, 0, 0.6, 1);
          stroke: currentColor;
          stroke-width: 3.12px;
          stroke-dashoffset: 29.7833385;
          stroke-dasharray: 29.7833385;
        }

        slot[name='input'] {
          display: none;
        }

        /* Checked */
        :host(.state-checked) .choice-field__graphic-container {
          border-color: #018786;
          background: #018786;
        }

        :host(.state-checked) .checkmark {
          opacity: 1;
        }

        :host(.state-checked) path {
          stroke-dashoffset: 0;
        }
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  choiceGraphicTemplate() {
    return html`
      <svg class="checkmark" viewBox="0 0 24 24">
        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
      </svg>
      <div class="mixedmark"></div>
    `;
  }
}
