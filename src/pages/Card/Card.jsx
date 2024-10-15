import React, { useContext } from "react";
import "./Card.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function Card() {
  const { cardItems, removeCardItem, food_list, getTotalAmountCard} = useContext(StoreContext);
 const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-item">
        <div className="items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                {" "}
                <div key={index} className="items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p className="cross" onClick={() => removeCardItem(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-title">
          <h2>Cart Totals</h2>
          <div>
          <div className="card-details">
            <p>Subtotal</p>
            <p>{getTotalAmountCard()}</p>
          </div>
          <hr />
          <div className="card-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="card-details">
            <b>Total</b>
            <b>{getTotalAmountCard()+ 2}</b>
          </div>  
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="card-promocode">
            <div>
              <p>If you have A promo code,Enter it here</p>
              <div className="card-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Card;
