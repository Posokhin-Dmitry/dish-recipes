import { useState, useEffect } from 'react';
import getRandomRecipes from '../servises/api';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import RandomRecipe from '../components/RandomRecipe/RandomRecipe';
import useLocalStorage from '../hooks/useLocalStorage';

function HomeView() {
  const [recipesData, setRecipesData] = useState({});
  const [saveRecipes, setSaveRecipes] = useLocalStorage('recipes');

  useEffect(() => {
    newRecipe();
  }, []);

  const newRecipe = () => {
    getRandomRecipes().then(({ data }) => {
      setRecipesData(...data.meals);
    });
  };

  const handleNextRecipe = () => {
    newRecipe();
  };

  const handleAddRecipe = () => {
    if (saveRecipes.map(recipe => recipe.idMeal).includes(recipesData.idMeal)) {
      alert('This recipe already exists');
    } else {
      setSaveRecipes(prevState => [recipesData, ...prevState]);
    }
  };

  return (
    <Container>
      <RandomRecipe dataRecipes={recipesData} />
      <div className="button-section">
        <Button onClick={handleNextRecipe} name={'Skip'} />
        <Button onClick={handleAddRecipe} name={'Add'} />
      </div>
    </Container>
  );
}

export default HomeView;
