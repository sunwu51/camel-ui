# Radio
```jsx
<RadioGroup label="Gender">
    <Radio value="female">Female</Radio>
    <Radio value="male">Male</Radio>
</RadioGroup>
```
# radio group props
`RadioGroup` based on `react-aria useRadioGroup` with the following properties (similar with input):

`orientation`
Orientation
'vertical'
The axis the Radio Button(s) should align with.

`value`
string | null
—
The current value (controlled).

`defaultValue`
string | null
—
The default value (uncontrolled).

`onChange`
(value: string) => void
—
Handler that is called when the value changes.

`isDisabled`
boolean
—
Whether the input is disabled.

`isReadOnly`
boolean
—
Whether the input can be selected but not changed by the user.

`name`
string
—
The name of the input element, used when submitting an HTML form. See MDN.

`isRequired`
boolean
—
Whether user input is required on the input before form submission.

`isInvalid`
boolean
—
Whether the input value is invalid.
validationBehavior
'aria' | 'native'
'aria'
Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`
(value: string | null) => ValidationError
  | true
  | null
  | undefined
—
A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if validationBehavior="native". For realtime validation, use the isInvalid prop instead.

`label`
ReactNode
—
The content to display as the label.

`description`
ReactNode
—
A description for the field. Provides a hint such as specific requirements for what to choose.

`errorMessage`
ReactNode | (v: ValidationResult) => ReactNode
—
An error message for the field.

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
# other props
`className` and `style` is to be used to change the container style.

# styling
`className` and `style`.

Use a styled react node as the `label`.

Define the class `.radio-group-container>span` for the title style.

# validation
`errorMessage` which is a react jsx node, will be rendered if seted. When you want to validate the value by yourself, maybe once the form is submitted, then run the check in your component.
```jsx
function MyComponent() {
    const msgManagedByYou = if (my condition) ? null : 'xxx';
    return <Input errorMessage={msgManagedByYou}/>
}
```