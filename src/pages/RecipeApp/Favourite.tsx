import React from "react";

function Favourite() {
  return (
    <div className="recipeApp__favorite">
      <ul className="recipeApp__favorite-list">
        <li className="recipeApp__favorite-item">
          <div className="recipeApp__favorite-box">
            <div className="recipeApp__favorite__image">
              <img
                src="https://i1-vnexpress.vnecdn.net/2023/09/04/5300-3570-1680868733-5736-1682-8697-1467-1693838882.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=cNL7hQcDyFI5DHpU4ychcw"
                alt=""
              />
            </div>
            <h2 className="recipeApp__favorite__title">Title</h2>
            <i className="fa-solid fa-rectangle-xmark recipeApp__favorite__remove" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Favourite;
