import React from "react";
import '../CSS/women.css'
import { Link } from "react-router-dom";
const Women = () => {
  return (
    <div id="women">
      <div class="parent">
        <div class="div1">
          <img src="src\assets\images\womens\shirt.jpg" alt="" />
          <Link to='/women/shirts'>SHIRTS</Link> 
        </div>
        <div class="div2">
          <img src="src\assets\images\womens\jacket.jpg" alt="" />
          <Link to='/women/jackets'>JACKETS</Link> 
        </div>
        <div class="div3">
          <img src="src\assets\images\womens\kpop.jpg" alt="" />
          <Link to='/women/kpop'>  K-POP</Link>
        </div>
        <div class="div5">
          <img src="src\assets\images\womens\kurti.jpg" alt="" />
          <Link to='/women/kurti'>KURTI</Link>  
        </div>
        <div class="div6">
          <img src="src\assets\images\womens\saree_1.jpg" alt="" />
          <Link to='/women/saree'>SAREES</Link> 
        </div>
        <div class="div7">
          <img src="src\assets\images\womens\Tops.jpg" alt="" />
          <Link to='/women/tops'>TOPS</Link> 
        </div>
      </div>
    </div>
  );
};

export default Women;
