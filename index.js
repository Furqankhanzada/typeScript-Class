// Type Safety
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var test = 'Hello World';
//let test: number = 5;
//let test: boolean = true;
//let test: string | number = 444;
var students = [
    {
        firstName: 'Furqan',
        lastName: 'Khanzada',
        age: 28,
        email: 'furqan.khanzada@gmail.com'
    }
];
students.unshift({
    firstName: 'Kamran',
    lastName: 'Masood',
    age: 29,
    email: 'kami@gmail.com'
});
console.log('students :', students);
var modifiedStudents = students.map(function (student) {
    var s = __assign({ fullName: student.firstName + " " + student.lastName }, student);
    delete student.firstName;
    delete student.lastName;
    return s;
});
console.log('modifiedStudents :', modifiedStudents);
//let testObj : string[] = new Array()
var obj = { name: 'hello', id: 1 };
obj = { id: 1, name: 'Furqan' };
var ArrayObj = [
    { name: 'hello', id: 1 }
];
function add(numOne, numTwo) {
    if (numOne === void 0) { numOne = 0; }
    numOne + numOne;
}
function tryObj(obj) {
    console.log('tryObj', obj.name);
}
tryObj(obj);
var days = ['Monday', 'Tuesday', 'Wednesday'];
console.log("" + test);
console.log(test.length);
console.log('indexof', test.indexOf('W'));
console.log(typeof test);
console.log(add(5, 5));
console.log('days : ', days[1]);
days.forEach(function (value, index, arr) {
    console.log('val', value, index);
});
// Password: @ppbakerzzong50
// Optional params [mail_id?:string], default value [param2[:type] = default_value], rest params
// git status
// git init
// git add .   ---   git add FILENAME
// git remote add origin https://github.com/Furqankhanzada/typeScript-Class.git
//# sourceMappingURL=index.js.map