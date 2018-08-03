// inserção do mapa
var map;
function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
initialize();

// filtrar os restaurantes
// var valueInput;
$(document).ready(function(){
    var valueInput;
    var typeFoods;
    var nameRest;
    $('.btn').click(function(){
      valueInput = $('#filter').val();
      // var tipo = tipo.type;
      // if (valueInput)
      // fazer uma função fora do Jquery onde já pega o input e compara tudo e aqui no click só chamar essa função
    });
    // return valueInput;
    $.map(restaurantes, function(i) {
      typeFoods = i.type;
      nameRest = i.name;
      // var arrayType = $.makeArray(typeFoods);
      // console.log(typeFoods);
      // console.log(typeFoods);
    });
    if (valueInput === typeFoods || valueInput === nameRest){
      console.log(true);
    }
});

// var typeFoods = restaurantes.map(tipo => tipo.type);
// console.log(typeFoods);
