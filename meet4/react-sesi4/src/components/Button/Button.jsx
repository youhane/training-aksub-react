import { Wrapper, Text } from "./ButtonStyles"
import { useState } from "react"

// Function pada umumnya
export default function Button() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    // Bikin variabel di js biasa
    // let contoh = 10;
    // contoh = "sepuluh";

    // Bikin variabel di react
    // const [contoh, setContoh] = useState(10);
    // setContoh("sepuluh")

    function toggleShow() {
        setShow(!show)
        setShow("Ini udah diganti setShow")
        alert(show)
    }

    // int main(){
    //     int a = fibo(a)
    //     printf("a")
    // }

    // void fibo(){
    //     return a
    // }

    return (
        <Wrapper>
            <button onClick={toggleShow}>Buka Tutup</button>
            <Text>
                {show ? "Buka" : "Tutup"}
            </Text>
            <button onClick={() => setShow("Ini teksnya keganti")}>
                Ganti Text {show}
            </button>
            <button onClick={() => setLoading(false)}>
                Press to done loading
            </button>
            {/* <h1>{loading ? "Loading" : "Done Loading"}</h1> */}

            {/* Shorthands */}
            {/* If true, then show Loading */}
            <h1>{loading && "Loading"}</h1>

            {/* If false, then show Done Loading */}
            <h1>{loading || "Done Loading"}</h1>
        </Wrapper>
    )
}

// Arrow Function export default
// const Button = () => {
//     return(
//         <Wrapper>Ini Button</Wrapper>
//     )
// }

// export default Button

// Class Component
// import React, { Component } from 'react'

// export default class Button extends Component{
//     state = {
//         show: false,
//     }

//     toggleShow(){
//         this.setState({
//             show: !this.state.show
//         })
//     }

//     render() {
//         return (
//             <Wrapper><Text>Button</Text></Wrapper>
//         )
//     }
// }

// Kucing
// bisa ngapain aja = function
// punya apa aja = attribute = state

// Lemari extend Kulkas
// Lemari cuman bisa nyimpen barang
// Lemarinya jadi bisa nyimpen barang + bisa dinginin barang