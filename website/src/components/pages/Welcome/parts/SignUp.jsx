import React, { useState } from "react";

import Input from "../../../form/Input";

export default function Welcome(props) {
  const [mail, setMail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [error, setError] = useState(null);

  function handleLogIn(event) {
    event.preventDefault();
    alert(
      `mail : ${mail} || username : ${username} || passwaord : ${password} || confirmation : ${passwordConfirmation}`
    );
    // props.setDisplay("LogIn");
  }

  return (
    <div className="container">
      <div className="columns is-1 is-variable">
        <div className="column is-2"></div>
        <div className="column">
          <div className="box">
            <h1 className="title has-text-info">Why Sign Up ?</h1>
            <h2 className="subtitle">
              Here is an idea of what you can do with an account
            </h2>
            <hr />
            <div className="content">
              <ul>
                <li>
                  Create and share{" "}
                  <span className="has-text-info">Recipes</span>
                </li>
                <li>
                  Add <span className="has-text-info">Reviews</span> on other
                  people recipes
                </li>
                <li>
                  Add recipes to your{" "}
                  <span className="has-text-info">favorites</span>
                </li>
                <li>
                  Generate <span className="has-text-info">Shopping lists</span>{" "}
                  according to the ingredients of one or severals recipes
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <button
              className="delete is-medium is-pulled-right"
              onClick={() => props.setDisplay("Home")}
            ></button>

            <h1 className="title is-1 has-text-dark">
              Sign<span className="has-text-info">Up</span>
            </h1>
            <form onSubmit={handleLogIn}>
              <Input
                type="email"
                placeholder="Mail ..."
                onChange={(newMail) => setMail(newMail)}
              />
              <Input
                type="text"
                placeholder="UserName ..."
                onChange={(newUsername) => setUsername(newUsername)}
              />
              <Input
                type="password"
                placeholder="PassWord ..."
                onChange={(newPassword) => setPassword(newPassword)}
              />
              <Input
                type="password"
                placeholder="PassWord confirmation ..."
                onChange={(newPasswordConfirmation) =>
                  setPasswordConfirmation(newPasswordConfirmation)
                }
              />
              <div className="has-text-centered">
                <input
                  className="button is-info"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="column is-2"></div>
      </div>
    </div>
  );
}
