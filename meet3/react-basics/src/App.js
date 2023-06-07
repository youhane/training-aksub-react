import './App.css';
import './Styles.css'
import './hasil.css'
import './output.css'
import Button from './components/Button/Button'
import Title from './components/Title/Title';
import ToggleName from './components/ToggleName/ToggleName';
import { useState } from 'react';

function App() {
  // var show = false
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState("Andi");

  function showAlert(isi) {
    alert(isi)
  }

  const showAlert2 = (isi) => {
    alert(isi)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShow(!show)}>ToggleNameButton</button>

        <ToggleName show={show}/>

        <button
          onClick={() => {
            alert("INI ALERT 1")
            showAlert("Ini Show Alert 1")
          }}
        >
          ShowAlert
        </button>
        <button
          onClick={() => {
            alert("INI ALERT 2")
            showAlert2("Ini Show Alert 2")
          }}
        >ShowAlert2</button>

        <Title
          judul={"INI JUDULNYA"}
          desc={2}
          tanggal={{
            hari: "Senin",
            tanggal: 1,
            bulan: "Januari",
          }}
          array={[1, 2, 3, 4, "lima"]}
          // onClick={() => {
          //   alert("INI ALERT 3")
          //   showAlert("Ini Show Alert 3")
          // }}
          onClick={showAlert}
        />
        {/* Component Button */}
        <Button />
        <div className='classBaru'>
          Class Baru
        </div>
        <div className='classBaruLagi'>
          Class Baru Lagi
        </div>
        <div className='testSASS'>Test SASS/SCSS</div>
        <div className='testSASS3'>Test SASS/SASS</div>
      </header>
    </div>
  );
}

export default App;
