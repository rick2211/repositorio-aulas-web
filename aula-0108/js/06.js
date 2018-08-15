$(function(){
  //Localizar e selecionar somente o primeiro elemento
  $('#lista1 li:first').css('border','2px solid #369');

  //Localizar e selecionar somente o ultimo elemento
  $('#lista1 li:last').css('border','2px solid #369');
  //selecionar todos menos o ultimo elemento
  $('#lista2 li:not(:last)').css('border','2px solid #369');
// selecionar todos os impares
  $('#lista3 li:odd').css('border','2px solid #369');

  // selecionar todos os pares
  $('#lista4 li:even').css('border','2px solid #369');

// selecionar partindo de uma posiçao
  $('#lista5 li:gt(1)').css('border','2px solid #369');

  // selecionar elemento anterior
  $('#item').prev().css('border','2px solid #369');

  // selecionar elemento posterior
  $('#item').next().css('border','2px solid #369');

  // selecionar todos os elementos dentro de um princpal(pai)
    $('#lista7').children().css('border','2px solid #369');

  //  localizar e selecionar todos os elementos
  $('body').find('span').css('background-color','#DC143C')

})
