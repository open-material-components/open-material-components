import { dedupeMixin, css } from '@lion/core';
import '@omc/validation-feedback/omc-validation-feedback.js';

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
          css`
            /* Your general style overrides */
          `,
        ];
      }
    },
);
