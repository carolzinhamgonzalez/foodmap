// filtrar os restaurantes
$(document).ready(function(){
  // tela splash
    $('.initial').fadeToggle(4000);
  // função click
    $('.btn').click(function(){
      $('.photos').children().remove();
      filter();
      $('#filter').val('');
    });
// função para pegar o valor do input
    function value(){
      var valueInput;
      valueInput = $('#filter').val();
      return valueInput;
    };
// função para filtrar, devolver restaurantes, imagens e modais
    function filter() {
      var getData = $.map(restaurantes, function(i, n) {
        var valueArr = value();
        var type = i.type;
        var name = i.name;
        var img = i.image;
        console.log(n);
        var description = i.description;
        for (restaurante of restaurantes) {
          var compareType = valueArr.startsWith(type);
          var compareName = valueArr.startsWith(name);
        }
        if (compareType === true || compareName === true){
          $('<img>').attr('src', img).attr('data-toggle', "modal").attr('data-target', "#res-"+n).appendTo('.photos');

          var modalHtml = '<div class="modal fade" id="res-'+ n +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id=modal-title-"'+ n +'">'+ name +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+ description +'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-warning">Realizar pedido</button></div></div></div></div> ';
          var divModais = $('#modais').html();
          var modais = divModais + modalHtml;
          $('#modais').html(modais);
        }
      });
    };
});

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
