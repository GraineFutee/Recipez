const { Pool } = require("pg");
const pool = new Pool({
  user: "pierro",
  host: "localhost",
  database: "recipez",
  password: null,
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
