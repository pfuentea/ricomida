$(document).ready(function(){

    $(function() {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    $('#enviarCorreo').on('click',function(){
        alert('El correo fue enviado correctamente');
    });

    $('h1').on('dblclick',function(){
        $(this).addClass('rojo');
    });

    $('.card-title').on('click', function(){
        $('.card-text').toggle();
    });


});


    




