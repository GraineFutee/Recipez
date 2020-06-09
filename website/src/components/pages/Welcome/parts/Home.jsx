import React from "react";

export default function Home(props) {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-1 has-text-dark">
          Recip<span className="has-text-primary">eZ</span>
        </h1>
        <input
          className="input is-rounded"
          type="text"
          placeholder="Look for a dish"
          style={{ width: "60%", paddingRight: "50px" }}
        />
        <button
          className="button is-primary is-rounded"
          style={{ marginLeft: "-50px" }}
        >
          GO !
        </button>
      </div>
    </div>
  );
}
