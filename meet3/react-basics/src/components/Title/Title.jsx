import React from 'react'

function Title({judul, desc, tanggal, array, onClick}) {
  return (
    <div>
        <div>{judul}</div>
        <div>{desc}</div>
        <div>{tanggal.hari}</div>
        
        {/* <div>{array}</div> */}
        {/* Map, for, foreach, filter */}
        {
            array.map(item => {
                return <div>{item}</div>
            })
        }

        {
            array.filter(item => {
                return item === 2
            })
        }
        
        <br></br>
        <button onClick={() => onClick("INI DARI TITLE")}>YANG INI BUTTONNYA TITLE</button>
    </div>
  )
}

export default Title