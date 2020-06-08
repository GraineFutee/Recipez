import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import UpdateNew from "./pages/UpdateNew/UpdateNew";
import MyRecipes from "./pages/MyRecipes/MyRecipes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
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
