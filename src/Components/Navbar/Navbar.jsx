import React from "react";
import "./Navbar.scss";
import logo from "../../imgs/IMAGE.png";

const Navbar = () => {
  return (
    <div className="Container1">
      <div className="nav">
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#">Benefits</a>
        </li>
          <li>
          <a href="#">Features</a>
        </li>  <li>
          <a href="#">Reviews</a>
        </li>  <li>
          <a href="#">Pricing</a>
        </li>  <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="nav__btn">Buy Crypto</button>

      </div>

    </div>
  );
};

export default Navbar;
