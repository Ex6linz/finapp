import { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post('/api/recipes', formData);
            console.log('Przepis dodany:', response.data);
            // Możesz tutaj również dodać logikę przekierowania lub aktualizacji stanu aplikacji
        } catch (error) {
            console.error('Błąd dodawania przepisu:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tytuł:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Opis:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Zdjęcie:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
            </div>
            <button type="submit">Dodaj przepis</button>
        </form>
    );
};

export default RecipeForm;