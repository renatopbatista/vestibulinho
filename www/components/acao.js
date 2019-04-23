// This is a JavaScript file

//vibrar
$(document).on("click", "#institucional", function(){
  navigator.vibrate(4000);
});

//beep
$(document).on("click", "#local", function(){
  navigator.notification.beep(1);
});


//mapa
$(document).on("click", "#mapa", function(){

var onSuccess = function(position){

L.mapquest.key = 'wcbAIEAbBdYNOHSZ9Qefm71xoFMaAgws';

L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
}
navigator.geolocation.getCurrentPosition(onSuccess);
});