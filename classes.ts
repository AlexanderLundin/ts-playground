// tsc classes.ts -w

class User{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }
}

let john = new User('John Doe', 'jd@gmail.com', 34);
