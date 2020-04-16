// tsc classes.ts -w
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
