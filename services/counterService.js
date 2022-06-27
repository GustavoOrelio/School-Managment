var counter = 0;

module.exports = class counterService{
    static getCounter(){
        return {counter: counter}
    }

    static increment(){
        counter ++;
        return {counter: counter}
    }
}