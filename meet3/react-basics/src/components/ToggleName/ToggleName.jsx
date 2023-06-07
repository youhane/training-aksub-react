import React from 'react'

// show itu boolean
// true/false
function ToggleName({ show }) {
    return (
        <button>
            Toggle Name
            {
                show ? <h1>Namanya ada</h1> : null
            }
            {
                show ? 
                <div>
                    <h1>Ini</h1>
                    <p>text</p>
                    <h2>lain</h2>
                </div> 
                : 
                null
            }
        </button>
    )
}

export default ToggleName