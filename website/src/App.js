import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./components/pages/Welcome/Welcome";
import Search from "./components/pages/Search/Search";
import Recipe from "./components/pages/Recipe/Recipe";
import UpdateNew from "./components/pages/UpdateNew/UpdateNew";
import MyRecipes from "./components/pages/MyRecipes/MyRecipes";

import Navbar from "./components/components/Navbar";

function App() {
  const [display, setDisplay] = useState("Home");

  return (
    <Router>
      <Navbar
        display={display}
        setDisplay={(newDisplay) => setDisplay(newDisplay)}
      />
      <Switch>
        <Route exact path="/">
          <Welcome
            display={display}
            setDisplay={(newDisplay) => setDisplay(newDisplay)}
          />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/update-new">
          <UpdateNew />
        </Route>
        <Route path="/my-recipes">
          <MyRecipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
