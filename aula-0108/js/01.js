// Executa quando a página for carregada
// $(document).ready(function() {
//   alert("Olá mundo");
// });

//Poderia fazer assim tb
// $(function(){
//   alert("Funciona assim também");
// });

//para evitar conflito com outra Biblioteca
var $j = jQuery.noConflict();
$j(document).ready(function() {
   alert("Olá mundo sem conflito");
 });
