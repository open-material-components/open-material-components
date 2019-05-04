> ## 🛠 Status: Pilot Phase
> Open Material Components are based on Lion Web Components which are still in an early alpha stage.
> Neither should should be considered production ready yet.
>
> The goal of our pilot phase is to gather feedback from a private group of users.
> Therefore, during this phase, we kindly ask you to:
> - not publicly promote or link us yet: (no tweets, blog posts or other forms of communication about Open Material Components & Lion Web Components)
> - not publicly promote or link products derived from/based on Lion Web Components
>
> As soon as Pilot Phase ends we will let you know (feel free to subscribe to this issue https://github.com/ing-bank/lion/issues/1)

# Open Material Components

Open Material Components is a set of highly performant, accessible and flexible Web Components.
They provide an opinionated [Material Design](https://material.io/) Style on top of [Lion Web Components](https://github.com/ing-bank/lion).

## How to install

```bash
npm i @omc/<package-name>
```

## Content

| Package                                     | Version                                                                                                                        | Description                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| **-- [Forms](./docs/forms.md) --**          |                                                                                                                                |                                                    |
| [checkbox](./packages/checkbox)             | [![checkbox](https://img.shields.io/npm/v/@omc/checkbox.svg)](https://www.npmjs.com/package/@omc/checkbox)                   | Checkbox form element                              |
| [checkbox-group](./packages/checkbox-group) | [![checkbox-group](https://img.shields.io/npm/v/@omc/checkbox-group.svg)](https://www.npmjs.com/package/@omc/checkbox-group) | Group of checkboxes                                |
| [field](./packages/field)                   | [![field](https://img.shields.io/npm/v/@omc/field.svg)](https://www.npmjs.com/package/@omc/field)                            | Base Class for all inputs                          |
| [form](./packages/form)                     | [![form](https://img.shields.io/npm/v/@omc/form.svg)](https://www.npmjs.com/package/@omc/form)                               | Wrapper for multiple form elements                 |
| [input](./packages/input)                   | [![input](https://img.shields.io/npm/v/@omc/input.svg)](https://www.npmjs.com/package/@omc/input)                            | Input element for strings                          |
| [input-amount](./packages/input-amount)     | [![input-amount](https://img.shields.io/npm/v/@omc/input-amount.svg)](https://www.npmjs.com/package/@omc/input-amount)       | Input element for amounts                          |
| [input-date](./packages/input-date)         | [![input-date](https://img.shields.io/npm/v/@omc/input-date.svg)](https://www.npmjs.com/package/@omc/input-date)             | Input element for dates                            |
| [input-email](./packages/input-email)       | [![input-email](https://img.shields.io/npm/v/@omc/input-email.svg)](https://www.npmjs.com/package/@omc/input-email)          | Input element for e-mails                          |
| [input-iban](./packages/input-iban)         | [![input-iban](https://img.shields.io/npm/v/@omc/input-iban.svg)](https://www.npmjs.com/package/@omc/input-iban)             | Input element for IBANs                            |
| [radio](./packages/radio)                   | [![radio](https://img.shields.io/npm/v/@omc/radio.svg)](https://www.npmjs.com/package/@omc/radio)                            | Radio from element                                 |
| [radio-group](./packages/radio-group)       | [![radio-group](https://img.shields.io/npm/v/@omc/radio-group.svg)](https://www.npmjs.com/package/@omc/radio-group)          | Group of radios                                    |
| [select](./packages/select)                 | [![select](https://img.shields.io/npm/v/@omc/select.svg)](https://www.npmjs.com/package/@omc/select)                         | Simple native dropdown element                     |
| [textarea](./packages/textarea)             | [![textarea](https://img.shields.io/npm/v/@omc/textarea.svg)](https://www.npmjs.com/package/@omc/textarea)                   | Multiline text input                               |
| [validate](./packages/validate)             | [![validate](https://img.shields.io/npm/v/@omc/validate.svg)](https://www.npmjs.com/package/@omc/validate)                   | Validation for form components                     |
| **-- [Icons](./packages/icon) --**          |                                                                                                                                |                                                    |
| [icon](./packages/icon)                     | [![icon](https://img.shields.io/npm/v/@omc/icon.svg)](https://www.npmjs.com/package/@omc/icon)                               | Display our svg icons                              |
| **-- [Localize](./packages/localize) --**   |                                                                                                                                |                                                    |
| [localize](./packages/localize)             | [![localize](https://img.shields.io/npm/v/@omc/localize.svg)](https://www.npmjs.com/package/@omc/localize)                   | Localize and translate your application/components |
| **-- [Overlays](./docs/overlays.md) --**    |                                                                                                                                |                                                    |
| [overlays](./packages/overlays)             | [![overlays](https://img.shields.io/npm/v/@omc/overlays.svg)](https://www.npmjs.com/package/@omc/overlays)                   | Overlays System using lit-html for rendering       |
| [popup](./packages/popup)                   | [![popup](https://img.shields.io/npm/v/@omc/popup.svg)](https://www.npmjs.com/package/@omc/popup)                            | Popup element                                      |
| [tooltip](./packages/tooltip)               | [![tooltip](https://img.shields.io/npm/v/@omc/tooltip.svg)](https://www.npmjs.com/package/@omc/tooltip)                      | Popup element                                      |
| **-- [Steps](./packages/steps) --**         |                                                                                                                                |                                                    |
| [steps](./packages/steps)                   | [![steps](https://img.shields.io/npm/v/@omc/steps.svg)](https://www.npmjs.com/package/@omc/steps)                            | Multi Step System                                  |
| **-- Individual Packages --**               |                                                                                                                                |                                                    |
| [ajax](./packages/ajax)                     | [![ajax](https://img.shields.io/npm/v/@omc/ajax.svg)](https://www.npmjs.com/package/@omc/ajax)                               | Fetching data via ajax request                     |
| [button](./packages/button)                 | [![button](https://img.shields.io/npm/v/@omc/button.svg)](https://www.npmjs.com/package/@omc/button)                         | Button                                             |

## How to use

### Use a Web Component

```html
<script type="module">
  import '@omc/input/omc-input.js';
</script>

<omc-input name="firstName"></omc-input>
```

### Use a JavaScript system

```html
<script type="module">
  import { ajax } from '@omc/ajax';

  ajax.get('data.json').then(response => {
    // most likely you will use response.data
  });
</script>
```

## Key Features

- High Performance - Focused on great performance in all relevant browsers with a minimal number of dependencies
- Accessibility - Aimed at compliance with the WCAG 2.0 AA standard to create components that are accessible for everybody
- Flexibility - Provides solutions through Web Components and JavaScript classes which can be used, adopted and extended to fit all needs

## Technologies

Open Material Components are an extension of [Lion Web Components](https://github.com/ing-bank/lion).

Open Material Components aims to be future proof and use well-supported proven technology. The stack we have chosen should reflect this.

- [lit-html](https://lit-html.polymer-project.org) and [lit-element](https://lit-element.polymer-project.org)
- [npm](http://npmjs.com)
- [yarn](https://yarnpkg.com)
- [open-wc](https://open-wc.org)
- [webpack](https://webpack.js.org)
- [Karma](https://karma-runner.github.io)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [ESLint](https://eslint.org)
- [prettier](https://prettier.io)
- [Storybook](https://storybook.js.org)
- [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- Lots and lots of tests

## How to contribute

Lion Web Components are only as good as its contributions.
Read our [contribution guide](./CONTRIBUTING.md) and feel free to enhance/improve our product.
