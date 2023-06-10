import './App.css';

// Export gapake default
// import {Button} from './components/Button/Button';

// Export default
import Button from './components/Button/Button';

// Import Form
import Form from './components/Form/Form';
import Dog from './components/Dog/Dog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
        <Form/>
        <Dog/>
      </header>
    </div>
  );
}

export default App;
