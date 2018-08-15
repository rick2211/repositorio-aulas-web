$(function(){
//click()  gera um evento  quando se produz um click em alum elemeno da pagina.
      $('#primeiro').click(function(){
          $(this).css('color',"#f60")
                 .css('background','#000');
      })
//dblclic - gera um evento apos um duplo click
      $('#segundo').dblclick(function(){
          $(this).css('color',"#fff")
              .css('background','#003');
      })


//hover - ele manipila 2 eventos - quando o mouse fica acima e quando sai do elemento
        $('#terceiro').hover(function(){
            $(this).css('background',"#f60")},
            function(){
            $(this).css("background","#fff")
        })

//mouseup- ele cria um evento assim que o usuario clicar e soltar o cliqu
            $('#quarto').mouseup(function(){
                $(this).css('font-family',"calibri")
                       .css('font-size','30px');
            })


//mouseout cria um evento quando um usuario tirar o mouse do elemento

          $('#quinto').mouseout(function(){
              $(this).css('background-color',"purple")

          })


//mousemove -  evento que é executado asiim que movemos o mouse


        $(document).mousemove(function(e){
            $('#move').text('Posição do eixo X= ' + e.pageX + ' Posição o eixo Y= ' + e.pageY)
        })

});
