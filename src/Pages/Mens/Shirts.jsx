import React from "react";

import ShirtJson from "../../Json/Men/shirts.json";

const Shirts = () => {
const divs=["div1","div2","div3","div5","div6","div7"]
  return (
    <div id="accessories">
      
      <div className="parent">
        {
          ShirtJson.map((shirts,index) => {
            return <div key={shirts.pid} className={divs[index]}>
              <img src={shirts.image} alt="" />
              <h1>{shirts.pname}</h1>
              <p>Price: ₹{shirts.price}</p>
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
                  onClick={() => handleAddTocart(shirts)}
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
          })
       }
      </div>
    </div>
  );
};

export default Shirts;
