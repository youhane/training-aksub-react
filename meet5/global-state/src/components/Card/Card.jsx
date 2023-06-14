import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Input from '../Input/Input'

const imgValue = "https://bncc.net/assets/img/BNCC_T.png"
const bioValue = [
    {
        label: "Work",
        text: "BINUS"
    }
]

// properties == props
// parameter di function
function Card({ bio = bioValue, img = imgValue, alt = "BNCC" }) {
  const { nama, setNama } = useContext(AppContext);

    return (
        <div>
            <h1>Title</h1>
            <img src={img} alt={alt} />
            <Input label={"Nama"} text={nama} />
            {/* Input */}
            {bio.map((item) => {
                return (
                    <Input label={item.label} text={item.value} />
                )
            })}
        </div>
    )
}

export default Card