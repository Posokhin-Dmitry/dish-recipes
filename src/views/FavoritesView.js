import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import Container from '../components/Container/Container';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import FavoriteRecipes from '../components/FavoriteRecipes/FavoriteRecipes';

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
    <Container>
      <Button onClick={handleCreateRecipe} name={'Create'} />
      <FavoriteRecipes data={saveRecipes} />
      {showModal && (
        <Modal onClose={toggleModal} onSubmit={handleAddNewRecipe} />
      )}
    </Container>
  );
};

export default FavoritesView;
