import { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../Context/StoreContext";

function Placeorder() {
  const { getTotalAmountCard } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="placeorder-left">
        <p className="placeorder-title">Delivery Information </p>
        <div className="multiple-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multiple-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multiple-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
        <div className="placeorder-button">
          <button>Submit</button>
        </div>
      </div>
      
      <div className="placeorder-right">
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
                <b>{getTotalAmountCard() + 2}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Placeorder;
