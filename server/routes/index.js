// const recipes = require("./recipes");
// const ingredients = require("./ingredients");
const users = require("./users");

module.exports = (app) => {
  //   app.use("/api/recipes", recipes);
  //   app.use("/api/ingredients", ingredients);
  app.use("/api/users", users);
};
