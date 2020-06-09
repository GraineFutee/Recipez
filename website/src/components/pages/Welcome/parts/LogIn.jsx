import React, { useState } from "react";

import Input from "../../../form/Input";

export default function LogIn(props) {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  function handleLogIn(event) {
    event.preventDefault();
    alert(`mail : ${mail} || passwaord : ${password}`);
    // props.setDisplay("Home")
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-4"></div>
        <div className="column">
          <div className="box">
            <button
              className="delete is-medium is-pulled-right"
              onClick={() => props.setDisplay("Home")}
            ></button>

            <h1 className="title is-1 has-text-dark">
              Log<span className="has-text-link">In</span>
            </h1>
            <form onSubmit={handleLogIn}>
              <Input
                type="email"
                placeholder="Mail ..."
                onChange={(newMail) => setMail(newMail)}
              />
              <Input
                type="password"
                placeholder="PassWord ..."
                onChange={(newPassword) => setPassword(newPassword)}
              />
              <div className="has-text-centered">
                <input
                  className="button is-link"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="column is-4"></div>
      </div>
    </div>
  );
}
