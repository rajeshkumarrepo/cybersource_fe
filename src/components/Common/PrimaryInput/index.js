import React, { Component } from 'react'
import './index.scss'

class PrimaryInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      passwordText: 'SHOW',
      inputActive: false
    }
  }

  showPassword = e => {
    !!e && e.stopPropagation()
    const inputRef = this.inputRef
    if (!!inputRef) {
      if (inputRef.type === 'text') {
        inputRef.type = 'password'
        this.setState({ passwordText: 'SHOW' })
      } else {
        inputRef.type = 'text'
        this.setState({ passwordText: 'HIDE' })
      }
    }
  }

  render() {
    const {
      id,
      name,
      value,
      active,
      disabled = false,
      errClass = '',
      showPassword = false,
      className = '',
      label = 'Label',
      type = 'text',
      inputMode = null,
      handleOnClick,
      handleOnChange,
      handleOnFocus,
      handleOnBlur,
      oneline = false,
      inputRef,
      tabIndex,
      readOnly = false,
      autoComplete = true
    } = this.props
    const { inputActive } = this.state
    return (
      <label
        id={id}
        className={`primary-input-label ${errClass} ${!!disabled ? 'primary-input-label-disabled' : ''} ${!!oneline ? 'primary-input-one-line-style' : ''}`}
        onClick={() => !!handleOnClick && handleOnClick()}>
        <span className={`${(!!inputActive || !!active || !!value) ? 'floating_label' : 'label'}`}>{label}</span>
        
        <input
          name={name}
          className={`primary-input-field body1_regular ${className} ${!!autoComplete ? '' : 'disable-autocomplete'}`}
          onChange={handleOnChange}
          type={type}
          value={value}
          ref={node => {
            this.inputRef = node
            if (!!inputRef) {
              inputRef = node
            }
          }}
          // HINT: Chrome ignore the autocomplete="off"
          autoComplete={!!autoComplete ? '' : 'nope'}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          inputMode={inputMode}
          onFocus={e => {
            this.setState({ inputActive: true })
            !!handleOnFocus && handleOnFocus(e)
          }}
          onBlur={e => {
            this.setState({ inputActive: false })
            !!handleOnBlur && handleOnBlur(e)
          }}
        />
        {type === 'password' && !!showPassword &&
          <p className="primary-input-show-password bold" onClick={(e) => this.showPassword(e)}>{this.state.passwordText}</p>}
      </label>
    )
  }
}

export default PrimaryInput