$(function () {
    $('#botao1').click(function () {
        $('#um').toggleClass('formata');
    });

    //quando o elemento ganha foco
    $('#login,#senha').focus(function () {
        $(this).addClass('focado');
    });

    //quando o elemento perde o foco
    $('#login,#senha').blur(function () {
        $(this).removeClass('focado');
    });



    //tecla pressionada 
    $('#login').keydown(function () {
        console.log("alguma tecla foi pressionada");
    });

    //tecla solta
    $('#login').keyup(function () {
        console.log("alguma tecla foi solta");

    });

    //verificar qual a tecla foi pressionada

    $('#login').keydown(function (e) {
        console.log(e.keyCode);

    });

    //aparecer e desaparecer elemento
    $('#btndois').click(function () {
        $('#dois').toggle('slow');
    });

    //fade
    $('#btntres').click(function () {
        $('#dois').fadeToggle('slow');
    });

    //slide
    $('#btnquatro').click(function () {
        $('#dois').slideToggle('slow');
    });

    //avancar
    $('#btncinco').click(function () {
        $('#dois').animate({
            'margin-left': '+=50px'
        }, 'slow');

    });

    //voltar
    $('#btnseis').click(function () {
        $('#dois').animate({
            'margin-left': '-=50px'
        }, 'slow');

    });

    //animate

    $('#btnsete').click(function () {
        $('#dois').animate({
            'margin-left': 100,
            'margin-top': 120,
            'border-radius': 50
        }, 1500);

    });

    //Vai e Volta

    $('#btnoito').click(function () {
        $('#dois').animate({
            'margin-left': 100,
            'margin-top': 120,
            'border-radius': 50
        }, {
            duration: 1500, complete: function () {
                $('#dois').animate({
                    'margin-left': 0,
                    'margin-top': 20,
                    'border-radius': 0
                }
                    , 1500);

            }
            });
    });
    //Fim da Funçao
});