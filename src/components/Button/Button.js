import React from 'react'
import './button.css'

const Button = ({ id, icon, func}) => (
    <button   id={ id } value={ icon } onClick={func}  >
        { icon }
    </button>
)

export default Button