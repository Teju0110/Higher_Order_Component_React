import './App.css';
import Click from './Components/Click';
import MouseOver from './Components/MouseOver';

function App() {
  return (
    <div className="App">
      <Click event="Click"/>
      <MouseOver event="Mouse over"/>
    </div>
  );
}

export default App;
