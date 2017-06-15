var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = (function () {
    function Human(fName, lName) {
        // let _self = this;
        // setTimeout(function(){
        //     _self.setFulName(fName, lName)
        // }, 2000);
        var _this = this;
        setTimeout(function () {
            _this.setFulName(fName, lName);
        }, 2000);
    }
    Human.prototype.setFulName = function (fName, lName) {
        this.fullName = fName + " " + lName;
    };
    Human.prototype.getFullName = function () {
        return this.fullName;
    };
    return Human;
}());
var h = new Human('Furqan', 'Khanzada');
console.log(' h :', h.getFullName());
console.log(' fname :', h.fullName);
console.log(' instanceof :', h instanceof Human);
setTimeout(function () {
    console.log(' h :', h.getFullName());
    console.log(' fname :', h.fullName);
}, 2500);
//h.eat()
// TASK :
// This class should have 2 props (firstName and lastName)
// then make a method which will return full name and it should be getFullName
var A = (function () {
    function A() {
        console.log('A');
    }
    A.prototype.hello = function () {
        console.log('hello parent');
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = this;
        console.log('B');
        _this = _super.call(this) || this;
        _this.hello();
        return _this;
    }
    B.prototype.hello = function () {
        _super.prototype.hello.call(this);
        console.log('hello child');
    };
    return B;
}(A));
var ab = new A();
//# sourceMappingURL=classes.js.map