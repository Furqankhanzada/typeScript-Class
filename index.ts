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


// [['Furqan', 'Khanzada', 28, 'furqan.khanzada@gmail.com'],]
console.log('students :', students);

// let modifiedStudents = students.map(function(student){
//       let fullName = `${student.firstName} ${student.lastName}`;
//       let s = {fullName, ...student};
//       delete student.firstName;
//       delete student.lastName;
//       return s

// })

//console.log('modifiedStudents :', modifiedStudents);


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
      //console.log('val', value, index);
})

for(let i = 0; i < 10; i++){
      //console.log('i :', i);
}

for(let key in students[0]){
      //console.log(key);
}

let task = students.map(function(student, i){
      let values: any[] = [];
      for(let key in student){
            values.push(student[key])
      }
      return values
})

//console.log('task :', task);


function testCallback(num1, num2, ggg){
      setTimeout(function(){
            ggg(num1 + num2, 'test');
      }, 1000)
}

//console.log(let a = testCallback(1, 2, 3));
testCallback(1, 2, function(param1, b){
      console.log('param1 :', param1)
      console.log('b :', b)
});

function filterStudents(arrayObj, age, operator ){
      return arrayObj.filter(function(obj){
            //eval('1 + 3')
            return eval(obj.age + operator + age)
      })
}

console.log('fl :', filterStudents(students, 28, '=='));

let a = 1;
let b = 1
if( a == b){
      console.log('TRUE')
}else{
      console.log('False')
}

switch(a){
      case 1: 

      break;
      
      case 2:

      break;

      default:
}
// Password: @ppbakerzzong50

// Optional params [mail_id?:string], default value [param2[:type] = default_value], rest params


// git status
// git init
// git add .   ---   git add FILENAME
// git remote add origin https://github.com/Furqankhanzada/typeScript-Class.git
