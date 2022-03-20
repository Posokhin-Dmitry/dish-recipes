const RandomRecipe = ({ dataRecipes }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = dataRecipes;
  return (
    <div id={idMeal}>
      <img
        src={
          strMealThumb
            ? strMealThumb
            : 'https://b-tm.com.ua/assets/galleries/105/noimage.png'
        }
        alt={strMeal}
        width={600}
      />
      <h1>{strMeal}</h1>
      <p>{strInstructions}</p>
    </div>
  );
};

export default RandomRecipe;
