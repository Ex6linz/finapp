
import './App.css'
import Navbar from "./navbar/Navbar.jsx";
import SliderComponent from "./components/Slider.jsx";
import ChartComponent from './components/ChartComponent';
import {useState} from "react";

function App() {
    const [variable1, setVariable1] = useState(10);
    const [variable2, setVariable2] = useState(20);
    const [variable3, setVariable3] = useState(30);

  return (
      <div className="navbar">
          <Navbar/>
          <SliderComponent/>

          <input type="number" value={variable1} onChange={e => setVariable1(+e.target.value)}/>
          <input type="number" value={variable2} onChange={e => setVariable2(+e.target.value)}/>
          <input type="number" value={variable3} onChange={e => setVariable3(+e.target.value)}/>

          <ChartComponent variable1={variable1} variable2={variable2} variable3={variable3}/>
      </div>
  )
}

export default App
