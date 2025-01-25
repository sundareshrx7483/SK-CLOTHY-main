import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";
import KpopJson from "../../Json/Women/kpop.json";
const WomenKpop = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];

  const dispatch = useDispatch();

  const handleAddTocart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div id="accessories">
      <div className="parent">
        {KpopJson.map((Kpop, index) => {
          return (
            <div key={Kpop.pid} className={divs[index]}>
              <img src={Kpop.image} alt="" />
              <h1>{Kpop.pname}</h1>
              <p>Price: ₹{Kpop.price}</p>
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
                  onClick={() => handleAddTocart(Kpop)}
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

export default WomenKpop;
