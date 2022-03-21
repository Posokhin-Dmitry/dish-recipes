import RandomRecipe from '../RandomRecipe/RandomRecipe';
import s from './FavoriteRecipes.module.css';

const FavoriteRecipes = ({ data }) => {
  return (
    <div>
      <ul className={s.recipesList}>
        {data.map(recipe => (
          <li className={s.recipeItem} key={recipe.idMeal}>
            <RandomRecipe dataRecipes={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteRecipes;
