import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";
import HoodiesJson from "../../Json/Men/hoodies.json";
const Hoodies = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];

  const dispatch = useDispatch();

  const handleAddTocart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div id="accessories">
      <div className="parent">
        {HoodiesJson.map((Hoodies, index) => {
          return (
            <div key={Hoodies.pid} className={divs[index]}>
              <img src={Hoodies.image} alt="" />
              <h1>{Hoodies.pname}</h1>
              <p>Price: ₹{Hoodies.price}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignContent: "center",
                  width: "400px",
                  height: "100px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "lightgreen",
                    borderRadius: "2px",
                    padding: "3px",
                    width: "100px",
                  }}
                  onClick={() => handleAddTocart(Hoodies)}
                >
                  Cart <sup>+</sup>{" "}
                </button>
                {/* <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}}>Buy</button> */}
                <button
                  style={{
                    backgroundColor: "lightgreen",
                    borderRadius: "2px",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  BUY
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hoodies;
