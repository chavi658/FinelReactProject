
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './homepage.css'

const HomePage = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="si">
    <div className="home-page">
         <div className="link-container">
      <Link to="/homepage" className="link">Homepage</Link><br />
      { !user && <Link to="/Signin" className="link">Signin</Link>}<br />
      {!user && <Link to="/login" className="link">Register</Link>}<br />
      { user && <Link to="/getAllRecipes" className="link">recipes</Link>}<br />
      { user && <Link to="/addRecipe" className="link">Add Recipe</Link>}<br />
      {/* <Link to="/editRecipe">Edit Recipe</Link><br /> */}
      {/* <Link to="/deleteRecipe">Deleting a recipe</Link><br /> */}
      { user && <Link to="/getAllCategory" className="link">Categories</Link>}<br/>
      { user && <Link to="/addCategory" className="link">Add Category</Link>}<br/>
      {user && <Link to="/getAllShoping" className="link">Shopping List</Link>}
      </div>
    </div>
    </div>
  );
}

export default HomePage;
