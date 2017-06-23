//$('body').html('Hello world')
// Call when DOM ready
$(function () {
    fetch('students.json').then(function (response) {
        return response.json();
    }).then(function (students) {
        students.forEach(function (student, index) {
            $('tbody').append("\n            <tr>\n                <td>" + index + "</td>\n                <td>" + student.name + "</td>\n                <td>" + student.age + "</td>\n                <td>" + student.email + "</td>\n            </tr>\n            ");
        });
    });
    $('button').on('click', function () {
        $('tbody').append("\n            <tr>\n                <td>3</td>\n                <td>sdasd</td>\n                <td>asdasd</td>\n                <td>asdasd</td>\n            </tr>\n            ");
    });
    $('tbody').on('click', 'tr', function () {
        console.log('On click');
    });
    // $('tbody tr').click(function(){
    //     console.log('click')
    // })
});
//# sourceMappingURL=main.js.map