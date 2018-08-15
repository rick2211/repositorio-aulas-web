$(function(){
  //Innsere um elemento no final do indicado
  $('#um').append('<p>Inserido pelo append</p>')

  //Innsere um elemento no inicio do indicado
  $('#dois').prepend('<h2>Inserido pelo append</h2>')
//html( - substituir o conteudo selecionado)
  $('#tres').html('<h1>Agora sera um hq</h1>')
  // text()inserir um texto
  $('h1').text('Agora é outro texto..............')

// append com apenas conteudo
$('h1').append('  ,FOMEEEEEEEEE!!!!')

// prepend com apenas conteudo
$('h1').prepend('FOMEEEEEEEEE!!!!,   ')

//Localizar um conteudo especifico
$('h3:contains("sumir")').css('color','#900')

//Inserir um elemento antes de outro insertBefore()
$('<a href="qqcoisa">Novo link antes da article</a>').insertBefore('article');

//Inserir um elemento antes de outro insertAfter()
$('<a href="qqcoisa">Novo link 2 depois da article</a>').insertAfter('article');

//empty()- limpar um conteudo

$('span').empty();

//remove - remover um elementos

$('#some').remove();

//replaceAll-  substituir um elemento por outro

$('<p> Ficou agora um paragrafo</p>').replaceAll('#troca');

});
