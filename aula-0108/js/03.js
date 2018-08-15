$(function(){
//pegando o valor do Atributo
var valor = $('#link1').attr('href');
console.log(valor);

//atribuir um  valor
$('#link1').attr('href','http://www.fiap.com.br');
$('#link1').attr('target','_blank');

$('#logo').attr('title','Logo do jQuery');
$('#logo').attr('width','100');

});
