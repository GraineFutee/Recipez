import React from "react";

import Background from "../../../img/bg.jpg";

import Home from "./parts/Home";
import LogIn from "./parts/LogIn";
import SignUp from "./parts/SignUp";

export default function Welcome(props) {
  return (
    <section
      className="hero is-fullheight-with-navbar"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {props.display === "Home" ? (
        <Home />
      ) : (
        <div
          className="hero-body"
          style={{
            backgroundColor: "rgba(99, 110, 114, 0.6)",
          }}
        >
          {props.display === "LogIn" ? (
            <LogIn setDisplay={(newDisplay) => props.setDisplay(newDisplay)} />
          ) : (
            <SignUp setDisplay={(newDisplay) => props.setDisplay(newDisplay)} />
          )}
        </div>
      )}
    </section>
  );
}
