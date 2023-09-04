import React from 'react';
import './recipeApp.scss'
import Header from './Header';
import Favourite from './Favourite';
import Advertise from './Advertise';

function RecipeApp() {
  return (
    <div className='recipeApp'>
      <Header />

      <Favourite />
     
      <Advertise />
    </div>
  )
}

export default RecipeApp