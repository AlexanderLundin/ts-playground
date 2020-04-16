// tsc classes.ts -w

class User{
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
        this.register();
    }

    register(){
        console.log(this.name + 'Is now registered');
    }

    getName(): string{
        return this.name;
    }
    
    getAge(): number{
        return this.age;
    }

    getEmail(): string{
        return this.email;
    }
    
    toString(): string{
        return this.getName() + ' ' + this.getAge() 
            + ' ' + this.getEmail();
    }
}

let john = new User('John Doe', 'jd@gmail.com', 34);
console.log(john.toString());
