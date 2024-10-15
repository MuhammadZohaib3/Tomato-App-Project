import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/javascript";

export const StoreContext = createContext(null);
  
const StoreContextProvider = (props) => {
  const [cardItems, setCardItem] = useState({});

  const addToCard = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItem((prev) => ({ ...prev, [itemId]:1}));

    } else {
      setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId]+1}));
    }
  };
  const removeCardItem = (itemId) => {
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId]-1}));

  };

  
 
const getTotalAmountCard = () => {
  let totalAmount = 0;
  for (const item in cardItems) {
    if(cardItems[item] > 0){
      let itemInfo = food_list.find((product) => product._id === item);
      totalAmount += itemInfo.price * cardItems[item]
     
  
    }
  
  }
  return totalAmount;
}



  const contextValue = {
    food_list,
    cardItems,
    setCardItem,
    addToCard,
    removeCardItem, 
    getTotalAmountCard
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
