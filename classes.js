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
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
        this.register();
    }
    User.prototype.register = function () {
        console.log(this.name + 'Is now registered');
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.toString = function () {
        return this.getName() + ' ' + this.getAge()
            + ' ' + this.getEmail();
    };
    return User;
}());
var john = new User('John Doe', 'jd@gmail.com', 34);
console.log(john.toString());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, user) {
        var _this = _super.call(this, user.getName(), user.getEmail(), user.getAge()) || this;
        _this.id = id;
        console.log('Member Created: ' + _this.getName());
        console.log(_super.prototype.toString.call(_this));
        return _this;
    }
    return Member;
}(User));
var member = new Member(1, john);
