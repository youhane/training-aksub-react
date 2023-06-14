import React, { useContext } from 'react'
import InputText from './components/InputText/InputText'
import { AppContext } from './context/AppContext';

function Edit() {
    const { bio, updateBio, work, email } = useContext(AppContext);

    return (
        <div className="App">
            <h1>Edit</h1>
            <div className='edit'>
                {bio.map((item, index) => {
                    return (
                        <InputText key={index} value={item.value} placeholder={item.label} onChange={item.onChange} />
                    )
                })}
            </div>
            <button onClick={() => updateBio()} className='edit-btn'>Save</button>
            <h1>CONTOH</h1>
            <h3>{work}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default Edit