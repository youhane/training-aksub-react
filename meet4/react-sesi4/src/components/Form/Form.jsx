import React, {useState, useRef} from 'react';
import {Wrapper} from './Form.styles'

const Form = () => {
    const [nama, setNama] = useState("");

    // const button = document.getElementById("button")
    const ref = useRef(null)

    function handleSubmit(){
        // alert("Form Submitted")
        alert(nama)
    }

    function handleChange(){
        // setNama(e.target.value)
        setNama(ref.current.value)
    }
    
    return (
        <Wrapper>
            <h1>Title</h1>
            <div>
                <label htmlFor="name">Name</label>
                {/* <input type="text" name="test" id="test" placeholder="Test" /> */}
                {/* Two Way Data Binding */}
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={nama}
                    ref={ref}
                    // onChange={(e) => setNama(e.target.value)} 
                    onChange={handleChange} 
                    placeholder="Nama" 
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </Wrapper>
    );
}

export default Form;
