import React from 'react'
import BarIcon from '../../shares/icons/BarIcon';
import logo from '../../assets/images/logo-recipe.jpg'

function Header() {
  return (
    <div className="recipeApp__header">
        
        <BarIcon />
        <img src={logo} alt="Logo" />
        <i className="fa-solid fa-magnifying-glass" />
        {/* <i className="fa-solid fa-xmark" /> */}
    </div>
  )
}

export default Header