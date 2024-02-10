import './App.css';
import Navbar from './components/Navbar';
import Slider from "./components/Slider";
//import PopularPosts from "./components/PopularPosts";

import image1 from "../src/assets/burger.jpg";
import image2 from "../src/assets/pizza.jpg";
import image3 from "../src/assets/salad.jpg";



function App() {
    const images = [image1, image2, image3];

    //const popularPostsData = [

    //];

    return (
         /*<div className="App">
            <Navbar />
            <Slider images={images} /> */

      <>
        <Navbar />
        <Slider images={images}/>
      </>
    );
}

export default App;
