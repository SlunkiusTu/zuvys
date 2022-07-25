import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoFishSharp } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <IoFishSharp />
            Žuvies
          </span>
          Karalyste{" "}
        </h1>
        <button className="btn">Sing in</button>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Homu</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">cool</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
