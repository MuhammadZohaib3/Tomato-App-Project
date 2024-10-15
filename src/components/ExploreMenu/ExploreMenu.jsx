import "./ExploreMenu.css";
import { menu_list } from "../../assets/javascript";

function ExploreMenu({category, setCategory}) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore our menu</h2>
      <p className="explore-text">
        Choose from a diverse manu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-list">
        {menu_list.map((item, index) => {
          return <div onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-list-item">
            <img className={category === item.menu_name? "active": ""} src={item.menu_img} alt=""/>
            <p>{item.menu_name}</p>

          </div>;
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
