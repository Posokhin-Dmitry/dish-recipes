import { useState, useEffect } from 'react';
import getRandomRecipes from '../servises/api';
import Container from '../components/Container/Container';
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
      <button type="button" onClick={handleNextRecipe}>
        Skip
      </button>
      <button type="button" onClick={handleAddRecipe}>
        Add
      </button>
    </Container>
  );
}

export default HomeView;
