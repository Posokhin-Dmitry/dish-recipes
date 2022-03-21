import React, { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './views/HomeView';
import FavoritesView from './views/FavoritesView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dish-recipes" exact element={<HomeView />} />
        <Route path="/favorites" element={<FavoritesView />} />
      </Routes>
    </div>
  );
}

export default App;
