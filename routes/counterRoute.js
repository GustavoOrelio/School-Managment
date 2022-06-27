const counterController = require("../controllers/counterControllers")

module.exports = class counterRoute{
    constructor(app){
        app.route("/counter").get(counterController.getCounter);
        app.route("/counter/increment").post(counterController.increment);
    }
}