import React from "react";
import "./FoodItems.css";
import { assets } from "../../assets/javascript";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItems = ({ id, name, price, description, image }) => {
  const {addToCard,removeCardItem, cardItems} = useContext(StoreContext);
  return (
    <div className="food-items">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cardItems[id]
        ? <img
            className="add"
            onClick={() => addToCard(id)}
            src={assets.add_icon_white}
            alt=""
          />
        :<div className="food-item-counter">
            <img
              onClick={() => removeCardItem(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cardItems[id]}</p>
            <img
              onClick={() => addToCard(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
