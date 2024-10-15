import React, { useContext, useState } from "react";
import "./Nav.css";
import { assets } from "../../assets/javascript";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
function Nav({setCurrstate}) {
  const [menu, setMenu] = useState("home");
  const { getTotalAmountCard } = useContext(StoreContext);
  return (
    <>
      <header>
        <div className="container">
         <Link to="/"><img className="logo" src={assets.logo} alt="" /></Link> 
          <ul className="nav-bar">
          <Link to="/" 
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}>
              Home
            </Link>
            <a href="#explore-menu"
              onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}
            >
              Menu
            </a>
            <a href="#App-download"
              onClick={() => setMenu("Mobile-App")}
              className={menu === "Mobile-App" ? "active" : ""}
            >
             Mobile-App
            </a>
            <a href="#footer"
              onClick={() => setMenu("Contact Us")}
              className={menu === "Contact Us" ? "active" : ""}
            >
              Contact Us
            </a>
          </ul>
          <div className="navBar-right">
            <img src={assets.search_icon} alt="" />
            <div className="search-icon">
            <Link to="/card"><img src={assets.basket_icon} alt="" /></Link>  
              <div className={getTotalAmountCard() === 0? '': 'dot'}></div>
            </div>
            <button onClick={()=>setCurrstate(true)}>sign in</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
