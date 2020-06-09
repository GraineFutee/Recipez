import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isBurgerActive, switchBurger] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title is-5">
            Recip
            <span className="has-text-primary">
              eZ <i className="fas fa-search"></i>
            </span>
          </h1>
        </Link>
        <div
          role="button"
          className={`navbar-burger burger ${isBurgerActive && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => switchBurger(!isBurgerActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div
        id="navbarMenu"
        className={`navbar-menu ${isBurgerActive && "is-active"}`}
      >
        <div className="navbar-end">
          <Link
            className={`navbar-item is-tab `}
            to="/"
            onClick={() => {
              switchBurger(false);
              props.setDisplay("SignUp");
            }}
          >
            <button className="button is-rounded is-info is-small">
              Sign Up
            </button>
          </Link>
          <Link
            className={`navbar-item is-tab `}
            to="/"
            onClick={() => {
              switchBurger(false);
              props.setDisplay("LogIn");
            }}
          >
            <button className="button is-rounded is-link is-small">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
