var Human = (function () {
    function Human(name) {
        this.setName(name);
    }
    Human.prototype.setName = function (name) {
        this.name = name;
    };
    Human.prototype.getName = function () {
        return this.name;
    };
    return Human;
}());
var h = new Human('Furqan');
console.log(' h :', h.getName());
//h.eat() 
//# sourceMappingURL=classes.js.map