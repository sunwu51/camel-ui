# button

# props
`Button` is based on `react-aria hook` with the following properties:

`isDisabled`
boolean
—
Whether the button is disabled.


`onPress`
(e: PressEvent) => void
—
Handler that is called when the press is released over the target.

`onPressStart`
(e: PressEvent) => void
—
Handler that is called when a press interaction starts.

`onPressEnd`
(e: PressEvent) => void
—
Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`
(isPressed: boolean) => void
—
Handler that is called when the press state changes.

`onPressUp`
(e: PressEvent) => void
—
Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

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

`href`
string
—
A URL to link to if elementType="a".

`target`
string
—
The target window for the link.

`rel`
string
—
The relationship between the linked resource and the current page. See MDN.

`elementType`
ElementType | JSXElementConstructor<any>
'button'
The HTML element or React element used to render the button, e.g. 'div', 'a', or RouterLink.

`aria-expanded`
boolean
  | 'true'
  | 'false'
—
Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`
boolean
  | 'menu'
  | 'listbox'
  | 'tree'
  | 'grid'
  | 'dialog'
  | 'true'
  | 'false'
—
Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`
string
—
Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`
boolean
  | 'true'
  | 'false'
  | 'mixed'
—
Indicates the current "pressed" state of toggle buttons.

`type`
'button'
  | 'submit'
  | 'reset'
'button'
The behavior of the button when used in an HTML form.

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

# styling
Change the button style by passing the style parameter or passing the class name.

For example: use tailwind classname to change the background color.
```js
<Button className='bg-red-300 hover:bg-red-900'>Click</Button>
```
