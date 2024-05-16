$(document).ready(function(){
    $('#task-form').submit(function(e){
        e.preventDefault();
        var taskName = $('#task-input').val();
        if(taskName.trim() !== ''){
            $('#task-list').append('<li>' + taskName + '</li>');
            $('#task-input').val('');
            $('#task-table tbody').append('<tr><td>' + taskName + '</td></tr>');
        }
    });

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});
