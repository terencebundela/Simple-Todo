$(document).ready(function () {
    $('#btn').on('click', function () {
        var input = $('input[name=ListItem]').val();
        if($('input[name=ListItem]').val() == '') {
            alert("You Must Write Something!");
        } else
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i><i class="fas fa-trash"></i></li>'); 
    });
    
    $('input').keyup(function (event) {
        if (event.keyCode == 13) {
            $('#btn').click();
            $(this).val('');
        }
    })
    
    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200);

    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');

    });

    

    $('input').focus(function () {
        $(this).val('');
    });
});
