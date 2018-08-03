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
    $('.btn').click(function(){
      valueInput = $('#filter').val();
      // return valueInput;
    })
    // return valueInput;
})

console.log(type);

// if (valueInput === oi) {
//
// }

// restaurantes.map(type)

function type () {
  for (types in restaurantes){
    var comidas = type[types];
    return comidas;
  }
}
