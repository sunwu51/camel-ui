# Input
```jsx
<Input label="name:" placeholder="Input something" onInput={(e)=>console.log(e)}></Input>
```
# props
`Input` is based on `react-aria useTextField` with the following properties:

`inputElementType`
TextFieldIntrinsicElements
'input'
The HTML element used to render the input, e.g. 'input', or 'textarea'. It determines whether certain HTML attributes will be included in inputProps. For example, type.

`autoCapitalize`
'off'
  | 'none'
  | 'on'
  | 'sentences'
  | 'words'
  | 'characters'
—
Controls whether inputted text is automatically capitalized and, if so, in what manner. See MDN.

`aria-activedescendant`
string
—
Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

`aria-autocomplete`
'none'
  | 'inline'
  | 'list'
  | 'both'
—
Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

`aria-haspopup`
boolean
  | 'false'
  | 'true'
  | 'menu'
  | 'listbox'
  | 'tree'
  | 'grid'
  | 'dialog'
—
Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

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
validationBehavior
'aria' | 'native'
'aria'
Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`validate`
(value: string) => ValidationError
  | true
  | null
  | undefined
—
A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if validationBehavior="native". For realtime validation, use the isInvalid prop instead.

`description`
ReactNode
—
A description for the field. Provides a hint such as specific requirements for what to choose.

`errorMessage`
ReactNode | (v: ValidationResult) => ReactNode
—
An error message for the field.

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

`placeholder`
string
—
Temporary text that occupies the text input when it is empty.

`value`
string
—
The current value (controlled).

`defaultValue`
string
—
The default value (uncontrolled).

`onChange`
(value: TextFieldIntrinsicElements) => void
—
Handler that is called when the value changes.

`label`
ReactNode
—
The content to display as the label.

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

`excludeFromTabOrder`
boolean
—
Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`id`
string
—
The element's unique identifier. See MDN.

`autoComplete`
string
—
Describes the type of autocomplete functionality the input should provide if any. See MDN.

`maxLength`
number
—
The maximum number of characters supported by the input. See MDN.

`minLength`
number
—
The minimum number of characters required by the input. See MDN.

`pattern`
string
—
Regex pattern that the value of the input must match to be valid. See MDN.

`type`
'text'
  | 'search'
  | 'url'
  | 'tel'
  | 'email'
  | 'password'
  | string & {}
—
The type of input to render. See MDN.

`inputMode`
'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search'
—
Hints at the type of data that might be entered by the user while editing the element or its contents. See MDN.

`name`
string
—
The name of the input element, used when submitting an HTML form. See MDN.

`onCopy`
ClipboardEventHandler<HTMLInputElement>
—
Handler that is called when the user copies text. See MDN.

`onCut`
ClipboardEventHandler<HTMLInputElement>
—
Handler that is called when the user cuts text. See MDN.

`onPaste`
ClipboardEventHandler<HTMLInputElement>
—
Handler that is called when the user pastes text. See MDN.

`onCompositionStart`
CompositionEventHandler<HTMLInputElement>
—
Handler that is called when a text composition system starts a new text composition session. See MDN.

`onCompositionEnd`
CompositionEventHandler<HTMLInputElement>
—
Handler that is called when a text composition system completes or cancels the current text composition session. See MDN.

`onCompositionUpdate`
CompositionEventHandler<HTMLInputElement>
—
Handler that is called when a new character is received in the current text composition session. See MDN.

`onSelect`
ReactEventHandler<HTMLInputElement>
—
Handler that is called when text in the input is selected. See MDN.

`onBeforeInput`
FormEventHandler<HTMLInputElement>
—
Handler that is called when the input value is about to be modified. See MDN.

`onInput`
FormEventHandler<HTMLInputElement>
—
Handler that is called when the input value is modified. See MDN.

`aria-errormessage`
string
—
Identifies the element that provides an error message for the object.
# other props
`className` and `style` are for the container div.

`direction`
"column | row" the direction of the label and input.

`inputClassName` the class of the input element.

`labelClassName` the class of the label element.

# styling
Use the `className` and `style` change the container's styling.

Use the `inputClassName` and `labelClassName` change the inner input / label elements styling.

Or use a custom `label` for the label element.

# validation
`validate` property can be used to validate the input value, the check is real time. That's said every time you change the value, the check will run and render the error message.
```jsx
<Input validate={(val) => { check the val and return the error message}}/>
```

`errorMessage` which is a react jsx node, will be rendered if seted. When you want to validate the value by yourself, maybe once the form is submitted, then run the check in your component.
```jsx
function MyComponent() {
    const msgManagedByYou = if (my condition) ? null : 'xxx';
    return <Input errorMessage={msgManagedByYou}/>
}
```