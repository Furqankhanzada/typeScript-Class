// Type Safety

let test: string = 'Hello World';
//let test: number = 5;
//let test: boolean = true;
//let test: string | number = 444;

let students : { firstName: string, lastName: string, age: number, email: string }[] = [
      {
            firstName: 'Furqan',
            lastName: 'Khanzada',
            age: 28,
            email: 'furqan.khanzada@gmail.com'
      }    
];

students.unshift(
      {
            firstName: 'Kamran',
            lastName: 'Masood',
            age: 29,
            email: 'kami@gmail.com'
      }
)

console.log('students :', students);

let modifiedStudents = students.map(function(student){
      let fullName = `${student.firstName} ${student.lastName}`;
      let s = {fullName, ...student};
      delete student.firstName;
      delete student.lastName;
      return s

})

console.log('modifiedStudents :', modifiedStudents);


//let testObj : string[] = new Array()

let obj = {name: 'hello', id: 1};

obj = {id: 1, name: 'Furqan'}



let ArrayObj: {name: string, id: number}[] = [
      {name: 'hello', id: 1}
];

function add(numOne: number = 0, numTwo?: number) : void {
      numOne + numOne
}

function tryObj(obj: {name: string, id: number}){
      console.log('tryObj', obj.name)
}

tryObj(obj)

const days: string[] = ['Monday', 'Tuesday', 'Wednesday'];

console.log(`${test}`);
console.log(test.length);
console.log('indexof', test.indexOf('W'));
console.log(typeof test);
console.log(add(5, 5));

console.log('days : ', days[1]);

days.forEach(function(value, index, arr){
      console.log('val', value, index);
})



// Password: @ppbakerzzong50

// Optional params [mail_id?:string], default value [param2[:type] = default_value], rest params


// git status
// git init
// git add .   ---   git add FILENAME
// git remote add origin https://github.com/Furqankhanzada/typeScript-Class.git
