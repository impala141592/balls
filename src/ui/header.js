import React from "react";
import logotype from "../assets/logo/balls-logotype.svg";
import lettermark from "../assets/logo/balls-lettermark.svg";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <ul className="main-nav">
      <li>Home</li>
      <li>Favourites</li>
      <li>Cart</li>
      <li>PLN</li>
      <li>{/* <Link to="/">Home</Link> */}</li>
      <li>{/* <Link to="/hero">Hero</Link> */}</li>
    </ul>
  );
}

function Header() {
  return (
    <div className="header">
      <img className="logo" src={lettermark} alt="logo" />
      <MainNav />
    </div>
  );
}

export default Header;
