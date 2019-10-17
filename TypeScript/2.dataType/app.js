var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var names = "Amar";
console.log(names, typeof names);
var age;
age = 22;
console.log(age, typeof age);
var mobileNumber = 123456;
console.log(mobileNumber, typeof mobileNumber);
var address;
console.log(address, typeof address);
address = "Bijapur";
address = 586101;
console.log(address, typeof address);
var calAge = function () {
    console.log("Age is 26");
};
calAge();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person("amar", 22);
console.log(person1);
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, mobile) {
        var _this = _super.call(this, name, age) || this;
        _this.mobile = mobile;
        return _this;
    }
    return student;
}(Person));
var student1 = new student('Amar', 22, 253944);
console.log(student1);
