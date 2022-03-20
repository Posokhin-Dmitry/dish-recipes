import useLocalStorage from '../hooks/useLocalStorage';
import RandomRecipe from '../components/RandomRecipe/RandomRecipe';

const FavoritesView = () => {
  const [saveRecipes, setSaveRecipes] = useLocalStorage('recipes');

  const handleCreateRecipe = () => {};

  return (
    <div>
      <h1>Favorites</h1>
      <button type="button" onClick={handleCreateRecipe}>
        Create new recipe
      </button>
      <div>
        <ul>
          {saveRecipes.map(recipe => (
            <li key={recipe.idMeal}>
              <RandomRecipe dataRecipes={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesView;
