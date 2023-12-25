
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/Navbar';
import FoodSlider from '../components/FoodSlider';
import GoogleMap from "../components/GoogleMaps.jsx";
import "./styles/"

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        axios.get('/api/recipes')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Błąd pobierania przepisów:', error);
            });
    }, []);


    return (
        <div>
            <Navbar />
            <div className="navbar-links">
                <a href="/login">Login</a>
                <a href="/about">O nas</a>
            </div>
            <FoodSlider />
            <GoogleMap />
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;

