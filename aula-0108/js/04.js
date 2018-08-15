$(function(){
//trocando o conteúdo do html
$('#titulo').text('Feliz Ano novo!!!!');

//Inserir um novo elemento
$('.fim').html('<button>Novo Botão</button>');
console.log($('.fim').html());

//inseruir uma classe CSS
$('.texto').addClass('formata');

//pegando um determinado elemento de uma Lista
// var lista =$('li:eq(1)');
var lista = $('li').eq(1);
console.log(lista.text());

//percorrer os elementos
$('li').each(function() {
    alert($(this).html());
});

});
