class Human {
    fullName: string
    constructor(fName: string, lName: string){
        // let _self = this;
        // setTimeout(function(){
        //     _self.setFulName(fName, lName)
        // }, 2000);

        setTimeout(() => {
            this.setFulName(fName, lName)
        }, 2000);

    }
    setFulName(fName: string, lName: string) : void {
        this.fullName = `${fName} ${lName}`;
    }
    getFullName() : string {
        return this.fullName
    }
}

const h = new Human('Furqan', 'Khanzada')
console.log(' h :',  h.getFullName());
console.log(' fname :',  h.fullName);
console.log(' instanceof :',  h instanceof Human);

        setTimeout(function(){
console.log(' h :',  h.getFullName());
console.log(' fname :',  h.fullName);
        }, 2500);

//h.eat()

// TASK :
// This class should have 2 props (firstName and lastName)
// then make a method which will return full name and it should be getFullName

class A {
    constructor(){
        console.log('A')
    }
    hello() :void {
        console.log('hello parent')
    }
}

class B extends A {
    constructor(){
        console.log('B')
        super()
        this.hello()
    }
    hello() :void {
        super.hello()
        console.log('hello child')
    }
}

let ab: B = new A();