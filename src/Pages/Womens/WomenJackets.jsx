import React from "react";
import WomenJacketJson from "../../Json/Women/jackets.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";
const WomenJackets = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];

  const dispatch = useDispatch();

  const handleAddTocart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div id="accessories">
      <div className="parent">
        {WomenJacketJson.map((WomenJacket, index) => {
          return (
            <div key={WomenJacket.pid} className={divs[index]}>
              <img src={WomenJacket.image} alt="" />
              <h1>{WomenJacket.pname}</h1>
              <p>Price: ₹{WomenJacket.price}</p>
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
                  onClick={() => handleAddTocart(WomenJacket)}
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

export default WomenJackets;
