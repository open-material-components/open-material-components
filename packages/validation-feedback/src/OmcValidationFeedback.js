import { LitElement, DomHelpersMixin, css, html } from '@lion/core';
import { localize, LocalizeMixin } from '@lion/localize';

import { checkCircle, error, info, warning } from '@omc/icons';

import '@omc/icon/omc-icon.js';

export class OmcValidationFeedback extends LocalizeMixin(DomHelpersMixin(LitElement)) {
  static get properties() {
    return {
      validationData: {
        type: Object,
      },
    };
  }

  static get localizeNamespaces() {
    return [
      { 'omc-validation-feedback': locale => import(`../translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  constructor() {
    super();
    this._iconNamesMap = {
      info,
      warning,
      error,
      success: checkCircle,
    };
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.setAttribute('aria-live', 'polite');
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('validationData')) {
      this.__onValidationDataChanged(changedProperties);
    }
  }

  renderFeedback(validationStates, message) {
    const hideFeedback =
      message.list[0] &&
      message.list[0].data.validatorConfig &&
      message.list[0].data.validatorConfig.hideFeedback;

    // TODO: needs to be removed as soon as validationData is assigned directly from the outside
    if (message.list[0] && !hideFeedback) {
      this.validationData = {
        states: validationStates,
        message,
      };
    } else {
      this.validationData = null;
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-top: 8px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="container">
        <omc-icon id="icon" class="icon"></omc-icon>
        <span id="text" class="text"></span>
      </div>
    `;
  }

  __onValidationDataChanged() {
    if (this.validationData) {
      const { message } = this.validationData;
      const messageType = message.list[0].data.validatorType;
      const messageText = message.message;
      this.setAttribute('type', messageType);
      const iconName = this._iconNamesMap[messageType];
      const srType = this.translateMessage([`omc-validation-feedback:type.${messageType}`]);
      this.$id('icon').innerHTML = iconName;
      this.$id('icon').ariaLabel = srType;
      this.$id('text').innerText = messageText;
      this.$id('container').classList.remove('visually-hidden');
    } else {
      this.$id('icon').innerHTML = '';
      this.$id('icon').ariaLabel = '';
      this.$id('text').innerText = '';
      this.removeAttribute('type');
      this.$id('container').classList.add('visually-hidden');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  translateMessage(keys, data) {
    return localize.msg(keys, data);
  }
}
