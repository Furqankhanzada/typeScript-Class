//$('body').html('Hello world')

// Call when DOM ready
$(function(){
    let studentsArray = [];
    function renderStudent(students){
        $('tbody').html('');
        students.forEach((student, index) => {
            $('tbody').append(`
            <tr>
                <td>${index}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.email}</td>
            </tr>
            `)
        });
    }
    fetch('students.json').then((response) => {
        return response.json()
    }).then((students) => {
        studentsArray = students;
        renderStudent(students)
    })

    $('button').on('click', function(){
        
        studentsArray.push({
            name: $('input[name="name"]').val(),
            age: $('input[name="age"]').val(),
            email: $('input[name="email"]').val()
        })
        renderStudent(studentsArray)
    })


    $('tbody').on('click', 'tr' function(){
        console.log('On click')
    })

    // $('tbody tr').click(function(){
    //     console.log('click')
    // })

})

