const express = require("express");
const cors = require("cors");
const { json } = require("express");
const CounterRoute = require("./routes/CounterRoute")
const porta = process.env.PORT || 3000;

var contador = 1;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "School-Managment",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Gustavo Orelio"
            })
        })

        app.get("/ping", (req, res)=>{
            res.json({"Resposta":"pong"})
        })

        app.get("/contador", (req, res)=>{
            res.json({"contador": contador})
        })

        app.get("/incremento", (req, res)=>{
            contador ++;
            res.json({"contador": contador})
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new CounterRoute(app)
    }
}
App.init();