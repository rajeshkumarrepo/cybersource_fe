import React from 'react'
import './index.scss'

const EargoButton = ({
  id = '',
  className = '',
  disabled = false,
  label = 'Label',
  type = 'button',
  handleOnClick,
  tabIndex,
  children
}) => (
    <button
      id={id}
      type={type}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleOnClick}
      className={`eargo-component-button ${className}`}>{!!children ? children : label}</button>
  )

export default EargoButton