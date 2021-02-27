# Eargo UI Components - EargoButton

EargoButton component can provide a button with our standard design, which we can also use with redux-form. And also can modify Design according to requirements.

### Example

#### EargoButton: With All Props (Included Optional)

```javascript
<EargoButton
    id='eargo-button-id'
    className='eargo-button-custom-class'
    disabled={false}
    label='Label'
    type='button'
    tabIndex={1}
    handleOnClick={handleOnClickFn}
/>
```


### Use to pass Props 

##### id {string}
We can pass `id` for making it a unique selector in DOM.


##### className {string} (Optional)
If you want to add your own style or modify current CSS then you can pass your value on `className` prop.


##### disabled {boolean} (Optional)
`disabled` prop for doing set disable this input. by default it is false.


##### label {string}
`label` is required that will be shown on button.


##### type {string} (Optional)
By default `type` value is button, you can use the same component for `submit`, with pass simply `type` value as submit.


##### tabIndex {number} (Optional)
`tabIndex` is optional that we can set for tab order in form.


##### handleOnClick {func} (Optional)
If you want to occur any specific event on `click` of input passes your function on this prop.