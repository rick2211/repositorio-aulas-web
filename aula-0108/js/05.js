//adicionar uma classe
$('.conteudo').addClass('quadro');

//verificar se o conteúdo tem determinada classe
if ($('.conteudo').hasClass('quadro')){
  alert("tem a classe");
}
else{
  alert("Não tem a classe");
}
//configurar CSS
$('h1').css('color','#f60').css('font-size','50px');

//remover classe
// $('.conteudo').removeClass('quadro');
