/* regra da Senha
  senha vai de 0 a 100
  deve ter letras - 25
  deve ter numeros - 25
  deve ter caracteres especiais - 25
  mínimo de 10 caracteres- 25
*/
$(function(){
  $('#senha').keyup(function() {
    var texto = $(this).val();
    var forca = 0;

    if (texto.length >= 10) {
      forca+=25;
    }
    //letras
    var reg = new RegExp(/[a-z]/i);
    if (reg.test(texto)) {
      forca+=25;
    }
    //numeros
    var reg2 = new RegExp(/[0-9]/);
    if (reg2.test(texto)) {
      forca+=25;
    }
    //caracteres especiais
    var reg3 = new RegExp(/[^a-z0-9]/i);
    if (reg3.test(texto)) {
      forca+=25
    }

    if (forca >=75) {
      aceita = "Senha aceita";
    }
    else {
      aceita = "Senha não aceita";
    }

    $('#forca').text("Força: " + forca + "( " +texto + " )" + aceita);


  });

});
