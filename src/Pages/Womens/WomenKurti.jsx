import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";
import KurtiJson from '../../Json/Women/kurti.json';

const WomenKurti = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];

  const dispatch = useDispatch();

  const handleAddTocart = (items) => {
    dispatch(addToCart(items));
    items
    return (
      <div id="accessories">
        <div className="parent">
          {KurtiJson.map((item, index) => {
            return (
              <div key={item.pid} className={divs[index]}>
                <img src={item.image} alt="" />
                <h1>{item.pname}</h1>
                <p>Price: ₹{ite.price}</p>
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
                    onClick={() => handleAddTocart(item)}
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
}
export default WomenKurti ;
