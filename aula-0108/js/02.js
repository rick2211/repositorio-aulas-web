  $(function(){
    //selecionar uma tag
    var tag =$('h2');
    console.log(tag);
    console.log(tag.text());
    console.log(tag.html());

    //selecionar um id
    var btn= $('#botao');
    console.log(btn);
    console.log(btn.text());

    //selecionar uma classe
    var lista = $('.opcao');
    console.log(lista);
    console.log(lista.text());

    //selecionar uma classe dentro de elemento
    var lista2 = $('li.inicial');
    console.log(lista2);
    console.log(lista2.text());






  });
