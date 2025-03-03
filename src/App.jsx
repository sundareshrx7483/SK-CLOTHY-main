import React from "react";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Tshirts from './Pages/Mens/Tshirts'
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Sports from "./Pages/Sports";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Nav from "./Pages/Nav";
import Shirts from "./Pages/Mens/Shirts";
import Jackets from "./Pages/Mens/Jackets"
import Accessories from "./Pages/Mens/Accessories"
import Hoodies from './Pages/Mens/Hoodies.jsx'
import Blazzers from "./Pages/Mens/Blazzers.jsx";
import WomenJackets from "./Pages/Womens/WomenJackets.jsx";
import WomenShirts from "./Pages/Womens/WomenShirts.jsx";
import WomenTops from "./Pages/Womens/WomenTops.jsx";
import WomenKurti from "./Pages/Womens/WomenKurti.jsx";
import WomenSaree from "./Pages/Womens/WomenSaree.jsx";
import WomenKpop from "./Pages/Womens/WomenKpop.jsx";
const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/men" element={<Men/>}></Route>
          <Route path="/men/tshirts" element={<Tshirts />}></Route>
          <Route path="/men/shirts" element={<Shirts/>}></Route>
          <Route path="/men/jackets" element={<Jackets />}></Route>
          <Route path="/men/hoodies" element={<Hoodies/>}></Route>
          <Route path="/men/accessories" element={<Accessories />}></Route>
          <Route path="/men/blazzers" element={<Blazzers/>}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/women/jackets" element={<WomenJackets/>} ></Route>
          <Route path="/women/shirts" element={<WomenShirts/>} ></Route>
          <Route path="/women/tops" element={<WomenTops/>} ></Route>
          <Route path="/women/kurti" element={<WomenKurti/>} ></Route>
          <Route path="/women/saree" element={<WomenSaree/>} ></Route>
          <Route path="/women/kpop" element={<WomenKpop/>} ></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/sports" element={<Sports/>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
