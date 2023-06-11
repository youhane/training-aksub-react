import React, { useState } from 'react'
import { Wrapper } from './FormStyles'
import Input from '../Input/Input';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Form({id, titleValue, descValue, update}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(titleValue || "");
  const [desc, setDesc] = useState(descValue || "");

  function handleSubmit() {
    axios.post('http://localhost:3000/posts', {
      title: title,
      desc: desc,
      id: Math.floor(Math.random() * 100),
    }).then(() => {
      alert('success insert data');
      navigate('/');
    }).catch((err) => {
      alert(err);
    }).finally(() => {
      setTitle("");
      setDesc("");
    })
  }

  function renderUpdate(){
      return (
        <button onClick={handleSubmit}>Submit Data</button>
      )
  }

  return (
    <Wrapper>
        <h1>Form</h1>
        <div>
            <Input label="Title" placeholder="Insert title" type="text" value={title} onChange={(value) => setTitle(value)} />
            <Input label="Desc" placeholder="Insert desc" type="text" value={desc} onChange={(value) => setDesc(value)} />
            {renderUpdate()}
        </div>
    </Wrapper>
  )
}

export default Form