import s from './RandomRecipe.module.css';

const RandomRecipe = ({ dataRecipes }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = dataRecipes;
  return (
    <div id={idMeal} className={s.recipeCard}>
      <img
        src={
          strMealThumb
            ? strMealThumb
            : 'https://b-tm.com.ua/assets/galleries/105/noimage.png'
        }
        alt={strMeal}
        className={s.img}
      />
      <div className={s.textSection}>
        <h1 className={s.dishName}>{strMeal}</h1>
        <p className={s.dishText}>{strInstructions}</p>
      </div>
    </div>
  );
};

export default RandomRecipe;
