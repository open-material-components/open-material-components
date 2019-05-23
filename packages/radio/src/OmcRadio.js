import { css, html } from '@lion/core';
import { LionRadio } from '@lion/radio';

export class OmcRadio extends LionRadio {
  static get styles() {
    return [
      super.styles,
      css`
        .choice-field__graphic-container {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 18px;
          height: 18px;
          margin-right: 5px;
        }

        .inner-circle,
        .outer-circle {
          position: absolute;
          box-sizing: border-box;
          border-radius: 50%;
          transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
          transition: transform 0.12s cubic-bezier(0.4, 0, 0.6, 1) 0ms,
            border-color 0.12s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        }

        .outer-circle {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(0, 0, 0, 0.54);
        }

        .inner-circle {
          opacity: 0;
          top: 5px;
          left: 5px;
          width: 8px;
          height: 8px;
          background-color: #018786;
          transform: scale(0.5);
        }

        slot[name='input'] {
          display: none;
        }

        /* Checked */
        :host(.state-checked) .inner-circle {
          opacity: 1;
          transform: scale(1);
        }
        :host(.state-checked) .outer-circle {
          border-color: #018786;
        }

        /* Disabled */
        :host(.state-disabled) .inner-circle {
          background-color: #979797;
        }

        :host(.state-disabled) .outer-circle {
          border-color: #979797;
        }
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  choiceGraphicTemplate() {
    return html`
      <div class="outer-circle"></div>
      <div class="inner-circle"></div>
    `;
  }
}
