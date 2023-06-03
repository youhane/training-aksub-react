import logo from './logo.svg';
import './App.css';

// import "sdtdlib.io"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src="./logo.svg" alt="ini logonya" /> */}
        <p>
          Ganti <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link App"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// ctrl + c

export default App;
