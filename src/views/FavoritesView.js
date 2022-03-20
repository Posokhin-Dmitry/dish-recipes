import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import RandomRecipe from '../components/RandomRecipe/RandomRecipe';
import Modal from '../components/Modal/Modal';

const FavoritesView = () => {
  const [saveRecipes, setSaveRecipes] = useLocalStorage('recipes');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCreateRecipe = () => {
    toggleModal();
  };

  const handleAddNewRecipe = data => {
    const newRecipe = { idMeal: uuidv4(), ...data };
    if (saveRecipes.map(recipe => recipe.idMeal).includes(data.idMeal)) {
      console.log(saveRecipes);
      alert('This recipe already exists');
    } else {
      setSaveRecipes(prevState => [newRecipe, ...prevState]);
    }
    toggleModal();
  };

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
      {showModal && (
        <Modal onClose={toggleModal} onSubmit={handleAddNewRecipe} />
      )}
    </div>
  );
};

export default FavoritesView;
