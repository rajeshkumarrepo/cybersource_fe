# Eargo UI Components - PrimaryInput

PrimaryInput component will provide input according to our standard, which can also be implemented with redux-form also.

### Example

#### PrimaryInput: With All Props (Included Optional)

```javascript
<PrimaryInput
    id="input-id"
    name="input-name"
    value="input-value"
    active={true}
    disabled={false}
    errClass={"error_border"}
    showPassword={false}
    className="custom-class-name"
    label="Label"
    type="text"
    tabIndex={1}
    handleOnClick={handleOnClickFn}
    handleOnChange={handleOnChangeFn}
    handleOnFocus={handleOnFocusFn}
    handleOnBlur={handleOnBlurFn}
    oneline={false}
    inputRef={inputRef}
    readOnly={false}
    autoComplete={true}
/>
```


### Use to pass Props 

##### id {string}
We can pass id for making it a unique selector in DOM.


##### name {string}
`name` is required props that will be used for handle form submission.


##### value {string}
`value` for showing prefill value or form submission process.


##### active {boolean} (Optional)
`active` prop is the optional props that will be required when we'll use redux-form. In the case of redux-form active props will be provided by the redux-form, which will indicated the input is active or not.


##### disabled {boolean} (Optional)
`disabled` prop for doing set disable this input. by default it is false.


##### tabIndex {number} (Optional)
`tabIndex` is optional that we can set for tab order in form.


##### errClass {string}
`errClass` must be required if you want to show any specific error CSS in case of failure. Generally, we're using the `error_border` class for error CSS.


##### showPassword {boolean}
We are using the same component for password type. And if you want to provide a `Show Password` toggle feature for your UI, then you've to pass `showPassword` as true. by default it is false.


##### className {string} (Optional)
If you want to add your own style or modify current CSS then you can pass your value on `className` prop.


##### label {string}
`label` is required that will be shown on input.


##### type {string} (Optional)
By default `type` value is text, you can use the same component for `number` and `password`, with pass simply `type` value as number or password.


##### inputMode {string} (Optional)
By default `inputMode` value is null, you can pass `numeric` if you want to make a numeric keypad in case of mobile.


##### handleOnClick {func} (Optional)
If you want to occur any specific event on `click` of input passes your function on this prop.


##### handleOnChange {func} (Optional)
If you want to occur any specific event on `change` of input passes your function on this prop.


##### handleOnFocus {func} (Optional)
If you want to occur any specific event on input's `focus` passes your function on this prop.


##### handleOnBlur {func} (Optional)
If you want to occur any specific event on input's `blur` passes your function on this prop.


##### oneline {boolean} (Optional)
Our some form using two inputs in the same line, that's why we created this prop. if you need to enter two inputs in the same line then you can pass `oneline` value as true, by default it is false.


##### inputRef {ref} (Optional)
`inputRef` is the optional props. that will be used in case of a special operation, in which we want to execute some javascript code on our component reference.


##### readOnly {boolean} (Optional)
If you don't want to change your input you can set `readOnly` true, by default it is false.


##### autoComplete {boolean} (Optional)
By default `autoComplete` is true. If you want to prevent this feature, simply sent it as false.