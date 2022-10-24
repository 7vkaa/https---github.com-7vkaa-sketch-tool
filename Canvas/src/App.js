import './App.css';
import Canvas from './Components/Canvas';

function App() {

  
  return (
    <div style = {{backgroundColor: "#EEEEEE"}}>
    <div className="App">
      <Canvas
        width={1050}
        height={500}
      />
    </div>
    </div>
  );
}

export default App;
