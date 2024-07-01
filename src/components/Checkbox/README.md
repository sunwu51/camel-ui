# Checkbox
```jsx
<Checkbox defaultSelected={true}>use vue</Checkbox>
```
# props
`Checkbox` is based on `react aria useCheckbox` with the following properties

`isIndeterminate`
boolean
—
Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction.

`children`
ReactNode
—
The label for the element.

`defaultSelected`
boolean
—
Whether the element should be selected (uncontrolled).

`isSelected`
boolean
—
Whether the element should be selected (controlled).

`onChange`
(isSelected: boolean) => void
—
Handler that is called when the element's selection state changes.

`value`
string
—
The value of the input element, used when submitting an HTML form. See MDN.

`isDisabled`
boolean
—
Whether the input is disabled.

`isReadOnly`
boolean
—
Whether the input can be selected but not changed by the user.

`isRequired`
boolean
—
Whether user input is required on the input before form submission.

`isInvalid`
boolean
—
Whether the input value is invalid.

`validationBehavior`
'aria' | 'native'
'aria'
Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`
(value: boolean) => ValidationError
  | true
  | null
  | undefined
—
A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if validationBehavior="native". For realtime validation, use the isInvalid prop instead.

`autoFocus`
boolean
—
Whether the element should receive focus on render.

`onFocus`
(e: FocusEvent<Target>) => void
—
Handler that is called when the element receives focus.

`onBlur`
(e: FocusEvent<Target>) => void
—
Handler that is called when the element loses focus.

`onFocusChange`
(isFocused: boolean) => void
—
Handler that is called when the element's focus status changes.

`onKeyDown`
(e: KeyboardEvent) => void
—
Handler that is called when a key is pressed.

`onKeyUp`
(e: KeyboardEvent) => void
—
Handler that is called when a key is released.

`aria-controls`
string
—
Identifies the element (or elements) whose contents or presence are controlled by the current element.

`excludeFromTabOrder`
boolean
—
Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`id`
string
—
The element's unique identifier. See MDN.

`aria-label`
string
—
Defines a string value that labels the current element.

`aria-labelledby`
string
—
Identifies the element (or elements) that labels the current element.

`aria-describedby`
string
—
Identifies the element (or elements) that describes the object.

`aria-details`
string
—
Identifies the element (or elements) that provide a detailed, extended description for the object.

`aria-errormessage`
string
—
Identifies the element that provides an error message for the object.

`name`
string
—
The name of the input element, used when submitting an HTML form. See MDN.

# other props
`className` and `style` is for the container element.