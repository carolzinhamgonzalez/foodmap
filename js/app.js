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
$(document).ready(function()){
    $('#filter').click(=>{
      var value = $(this).val();
      return value;
    })
    console.log(value);

    // $( "#filter" ).keyup(function() {
    //     var value = $( this ).val();
    //     $( "p" ).text( value );
    //   })
    //   .keyup();

}
