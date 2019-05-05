# Validation feedback

Validation feedback render component, displays a validation feedback message underneath an input field.

## Features
- based on [validate](../validate/) types
  - **error**: blocking the field from being submitted to the server. For example:
    "Please enter an amount higher than 1000,00 euro."
  - **warning**: something looks wrong, but it is not blocking. For example an optional email input:
    "Please enter a valid e-mail address in the format "name@example.com"."
  - **info**: shows extra information. For example a message of a scheduled payment planner:
    "Ends on 15/05/2020 after 5 payments."
  - **success**: will only be triggered if there was a Message from one of the above validation types and is now correct. For example:
    "Ok, correct."
- makes use of [localize](../localize/)
- accessible
  - icon labels in different languages for screenreader users.
  - sets and removes itself from the dom when needed

## How to use
This component is used in all input (via [fieldMixin](../field-mixin)) and fieldset (via [fieldsetMixin](../fieldset/docs/FieldsetMixin.md)) components to show the validation message.
There is no need to implement this yourselves.
