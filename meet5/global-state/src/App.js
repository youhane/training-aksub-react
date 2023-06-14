import { useContext } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { AppContext } from './context/AppContext';

function App() {
  const { bio } = useContext(AppContext);

  return (
    <div className="App">
      <Card bio={bio} />
    </div>
  );
}

export default App;
