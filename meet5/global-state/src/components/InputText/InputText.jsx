import React from 'react'

function InputText({ value, onChange, placeholder }) {
    return (
        <div>
            <label>
                {placeholder}
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputText