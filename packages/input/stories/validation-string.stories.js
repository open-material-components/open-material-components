import { storiesOf, html } from '@open-wc/demoing-storybook';
import {
  equalsLengthValidator,
  minLengthValidator,
  maxLengthValidator,
  minMaxLengthValidator,
  isEmailValidator,
} from '@lion/validate';
import { LocalizeMixin } from '@lion/localize';
import { OmcInput } from '../src/OmcInput';

storiesOf('Forms|Input String Validation', module)
  .add(
    'equalsLength',
    () => html`
      <omc-input
        .errorValidators=${[equalsLengthValidator(7)]}
        .modelValue=${'not exactly'}
        label="equalsLengthValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[equalsLengthValidator(7)]}
        .modelValue=${'exactly'}
        label="equalsLengthValidator"
      ></omc-input>
    `,
  )
  .add(
    'minLength',
    () => html`
      <omc-input
        .errorValidators=${[minLengthValidator(10)]}
        .modelValue=${'too short'}
        label="minLengthValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[minLengthValidator(10)]}
        .modelValue=${'that should be enough'}
        label="minLengthValidator"
      ></omc-input>
    `,
  )
  .add(
    'maxLength',
    () => html`
      <omc-input
        .errorValidators=${[maxLengthValidator(13)]}
        .modelValue=${'too long it seems'}
        label="maxLengthValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[maxLengthValidator(13)]}
        .modelValue=${'just perfect'}
        label="maxLengthValidator"
      ></omc-input>
    `,
  )
  .add(
    'minMaxLength',
    () => html`
      <omc-input
        .errorValidators=${[minMaxLengthValidator({ min: 10, max: 13 })]}
        .modelValue=${'too short'}
        label="minMaxLengthValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[minMaxLengthValidator({ min: 10, max: 13 })]}
        .modelValue=${'too long it seems'}
        label="minMaxLengthValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[minMaxLengthValidator({ min: 10, max: 13 })]}
        .modelValue=${'just perfect'}
        label="minMaxLengthValidator"
      ></omc-input>
    `,
  )
  .add(
    'isEmail',
    () => html`
      <omc-input
        .errorValidators=${[isEmailValidator()]}
        .modelValue=${'foo'}
        label="isEmailValidator"
      ></omc-input>
      <omc-input
        .errorValidators=${[isEmailValidator()]}
        .modelValue=${'foo@bar.com'}
        label="isEmailValidator"
      ></omc-input>
    `,
  )
  .add('error/warning/info/success states', () => {
    class InputValidationExample extends LocalizeMixin(OmcInput) {
      static get localizeNamespaces() {
        return [
          { 'input-validation-example': locale => import(`./translations/${locale}.js`) },
          ...super.localizeNamespaces,
        ];
      }
    }
    if (!customElements.get('input-validation-example')) {
      customElements.define('input-validation-example', InputValidationExample);
    }

    const notEqualsString = (value, stringValue) => stringValue.toString() !== value;
    const notEqualsStringValidator = (...factoryParams) => [
      (...params) => ({ notEqualsString: notEqualsString(...params) }),
      factoryParams,
    ];
    const equalsStringFixedValidator = () => [() => ({ notEqualsStringFixed: false })];
    return html`
      <input-validation-example
        .errorValidators=${[notEqualsStringValidator('error')]}
        .successValidators=${[equalsStringFixedValidator()]}
        .modelValue=${'error'}
        label="Error"
        help-text="Clearing the error (add a character) will show a success message"
      ></input-validation-example>
      <input-validation-example
        .warningValidators=${[notEqualsStringValidator('warning')]}
        .modelValue=${'warning'}
        label="Warning"
      ></input-validation-example>
      <input-validation-example
        .infoValidators=${[notEqualsStringValidator('info')]}
        .modelValue=${'info'}
        label="Info"
      ></input-validation-example>
    `;
  });
