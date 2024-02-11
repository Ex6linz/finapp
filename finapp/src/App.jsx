
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
          <ChartComponent variable1={variable1} variable2={variable2} variable3={variable3}/>
      </div>
  )
}

export default App
