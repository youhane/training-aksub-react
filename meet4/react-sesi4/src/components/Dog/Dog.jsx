import React, {useEffect, useState} from 'react'
import {Wrapper} from './DogStyles'
import axios from 'axios'

const API = "https://random.dog/woof.json"

export default function Dog() {
    const [user, setUser] = useState("");
    const [dog, setDog] = useState("");

    // Use effect bakal jalanin function yang ada di dalamnya
    // setiap kali ada perubahan di dalam array
    // atau setiap kali pagenya di reload 
    useEffect(() => {
        // Call api
        axios.get(API).then((res) => {
            console.log(res.data.url);
            setDog(res.data.url);
        }).catch((err) => {
            console.log(err);
        });

        // Mau ngapain abis jalanin api
        // return () => {
        //     cleanup
        // };
    }, [user]);

    function renderImage(){
        if(dog){
            return <img src={dog} alt="dog" />
        }else{
            return <p>Loading...</p>
        }
    }

  return (
    <Wrapper>
        Dog
        <button onClick={() => setUser("ganti")}>Ganti Gambar</button>
        {renderImage()}
    </Wrapper>
  )
}
