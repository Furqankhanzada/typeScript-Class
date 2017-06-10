class Human {
    name: string
    age: number
    constructor(name: string){
        this.setName(name);
    }
    setName(name: string){
        this.name = name;
    }
    getName() : string {
        return this.name
    }
}

const h = new Human('Furqan')
console.log(' h :',  h.getName());
//h.eat()

// TASK :
// This class should have 2 props (firstName and lastName)
// then make a method which will return full name and it should be getFullName