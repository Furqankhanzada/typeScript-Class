//$('body').html('Hello world')

// Call when DOM ready
$(function(){
    fetch('students.json').then((response) => {
        return response.json()
    }).then((students) => {
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
    })

    $('button').on('click', function(){
        $('tbody').append(`
            <tr>
                <td>3</td>
                <td>sdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
            </tr>
            `)
    })


    $('tbody').on('click', 'tr' function(){
        console.log('On click')
    })

    // $('tbody tr').click(function(){
    //     console.log('click')
    // })

})

