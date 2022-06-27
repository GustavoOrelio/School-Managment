const counterService = require("../services/counterService")


module.exports = class counterController{
    static async getCounter(req, res){
        res.status(200).send(CounterService.getCounter())
    }

    static async increment(req, res){
        res.status(200).send(CounterService.increment())
    }
}