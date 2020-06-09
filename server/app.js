const express = require("express");
const mountRoutes = require("./routes");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mountRoutes(app);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../website/src/img/recipes");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
