//$('body').html('Hello world')
// Call when DOM ready
$(function () {
    var studentsArray = [];
    function renderStudent(students) {
        $('tbody').html('');
        students.forEach(function (student, index) {
            $('tbody').append("\n            <tr>\n                <td>" + index + "</td>\n                <td>" + student.name + "</td>\n                <td>" + student.age + "</td>\n                <td>" + student.email + "</td>\n            </tr>\n            ");
        });
    }
    fetch('students.json').then(function (response) {
        return response.json();
    }).then(function (students) {
        studentsArray = students;
        renderStudent(students);
    });
    $('button').on('click', function () {
        studentsArray.push({
            name: $('input[name="name"]').val(),
            age: $('input[name="age"]').val(),
            email: $('input[name="email"]').val()
        });
        renderStudent(studentsArray);
    });
    $('tbody').on('click', 'tr', function () {
        console.log('On click');
    });
    // $('tbody tr').click(function(){
    //     console.log('click')
    // })
});
//# sourceMappingURL=main.js.map