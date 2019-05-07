import { css } from '@lion/core';
import { LionButton } from '@lion/button';

/* TODO: border constants? */
/* TODO: spacer constants? */
/* TODO: contained button focus? */
/* TODO: toggle button */
/* TODO: button with icon */
/* contained button focus styles */

/* TODO: Define theme constants */
const constants = css`
  :host {
    --primary-color: #6200ee;
    --primary-color-contrast: white;
    --disabled-primary-color: gray;
    --disabled-secondary-color: lightgray;
  }
`;

// Lion defines too many specific styles. For now mnually set only the technical
// styles until fixed in lion.
const lionStyles = css`
  :host {
    display: inline-block;
    height: 40px; /* src = https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/ */
    outline: 0;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: transparent;
    box-sizing: border-box;
  }

  .btn {
    display: flex;
    align-items: center;
    position: relative;
  }

  :host .btn ::slotted(button) {
    position: absolute;
    visibility: hidden;
  }

  .click-area {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -3px -1px;
    padding: 0;
  }

  :host(:focus) {
    outline: none;
  }

  :host([disabled]) {
    pointer-events: none;
  }
`;

export class OmcButton extends LionButton {
  static get styles() {
    return [
      constants,
      lionStyles,
      css`
        :host {
          text-transform: uppercase;
          user-select: none;
        }

        .btn {
          height: 100%;
          border: 2px solid transparent;
          padding: 0 16px;
          border-radius: 4px;
          font-weight: 500;
          color: var(--primary-color);
        }

        .btn::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          border-radius: 4px;
          background-color: var(--primary-color);
          transition: opacity 300ms;
        }

        :host(:hover) .btn::after {
          opacity: 0.04;
        }

        :host(:focus) .btn::after {
          opacity: 0.12;
        }

        :host([outlined]) .btn {
          border-color: var(--primary-color);
        }

        :host([contained]) .btn {
          background-color: var(--primary-color);
          color: var(--primary-color-contrast);
        }

        :host([disabled]) .btn {
          color: var(--disabled-primary-color);
        }

        :host([outlined][disabled]) .btn {
          border-color: var(--disabled-primary-color);
        }

        :host([contained][disabled]) .btn {
          background-color: var(--disabled-secondary-color);
          color: var(--disabled-primary-color);
        }
      `,
    ];
  }
}
