import * as React from 'react'
import './index.scss'

const DotSpinLoading = ({ className = '', bgEffect = 'blur' }) => (
    <div className={`eargo-dot-spin-loading-layer-container center-flex ${className} ${bgEffect}`}>
        <div className="eargo-dot-spin-loading-layer-spinner" />
    </div>
)

export default DotSpinLoading