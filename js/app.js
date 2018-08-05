// inserção do mapa
// var map;
// function initialize() {
//     var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
//     var options = {
//         zoom: 5,
//         center: latlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map(document.getElementById("mapa"), options);
// }
// initialize();

// filtrar os restaurantes
// var valueInput;
$(document).ready(function(){
    $('.btn').click(function(){
      // valueInput = $('#filter').val();
      // console.log(value());
      // console.log(types());
      // console.log(namesRest());
      // console.log(compareTypes());
      // console.log(images());
      $('.photos').children().remove();
      console.log(filter());
      // fazer uma função fora do Jquery onde já pega o input e compara tudo e aqui no click só chamar essa função
    });
    function value(){
      var valueInput;
      valueInput = $('#filter').val();
      return valueInput;
    };
    function filter() {
      var getData = $.map(restaurantes, function(i) {
        var valueArr = value();
        var type = i.type;
        var name = i.name;
        var img = i.image;

        for (restaurante of restaurantes) {
          var compareType = valueArr.startsWith(type);
          var compareName = valueArr.startsWith(name);
          }
        if (compareType === true || compareName){
          $('<img>').attr('src', img).attr('id', name).appendTo('.photos');
        } else {
          alert("Não encontramos essa opção perto de você. Tente novamente");
          // $('<p></p>').text('Não encontramos essa opção perto de você. Tente novamente').appendTo('.photos');
        }
      })
    };

});

// var typeFoods = restaurantes.map(tipo => tipo.type);
// console.log(typeFoods);










// function types(){
//   var typeFoods = $.map(restaurantes, function(i){
//     let getData = i.type;
//     return getData;
//   });
//   return typeFoods;
// }
// function namesRest(){
//   var name = $.map(restaurantes, function(i){
//     let getData = i.name;
//     return getData;
//   });
//   return name;
// }
// function images(){
//   var imgs = $.map(restaurantes, function(i){
//     let getData = i.image;
//     return getData;
//   });
//   return imgs;
// }
// function compareTypes(){
//   var typesArr = types();
//   var valueArr = value();
//   for(type of typesArr){
//     var compare = valueArr.startsWith(type);
//     if (compare === true){
//       $('<img>').atrr('src', )
//     }
//   }
//
//    <img src="imagem.jpg" alt="Minha Figura">
//
//    $.each(restaurantes, function (i, restaurant){
//           if(restaurant.type === inputValue){
//
//             //cria a imagem no campo destinado aos restaurantes;
//             $('<img>').attr('src', restaurant.image).attr('id', restaurant.name).appendTo('#restaurant-shower');
//             openModal();
//           }
// //
//   return compare;
// }


// function compareNames(){
//   var namesArr = namesRest();
//   var valueArr = value();
//   for(name of namesArr){
//     var compare = valueArr.startsWith(name);
//   }
//   return compare;
// }
// function condition(){
//
// }
// if (compareTypes === true){
//
// } else {
//   alert("Você não está perto de nenhum restaurante correspondente. Encontramos essa variedade de comida próxima a você " + types() + ".");
// }
