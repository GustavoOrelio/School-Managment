"use strict";

const express = require("express");
const cors = require("cors");

class App {
  static async init() {
    let app = new express();
    app.use(express.json);
    app.use(cors());

    app.get("/endpoint", (req, res) => {
      res.json({
        name: "escola-api",
        version: "1.0.0",
        description: "Projeto para fins didaticos",
        author: "Gustavo Orelio",
      });
    });
    app.listen(3000);
  }
}
App.init();
