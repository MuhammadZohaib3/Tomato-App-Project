import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import Card from "./pages/Card/Card";
import Placeorder from "./pages/Placeorder/Placeorder";
import Nav from "./components/NavBar/Nav";

function App() {
  const [currstate, setCurrstate] = useState(false);
  return (
    <>
    {currstate? <Popup setCurrstate={setCurrstate} /> : <></>}
      <div className="app">
        <Nav setCurrstate={setCurrstate}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
