var mapOptions = {
    center: new google.maps.LatLng(40.721611, -74.095951),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.TERRAIN
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(40.721611, -74.095951)
};

var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var infoWindowOptions = {
    content: 'Staples Hudson County Mall'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){
  
  infoWindow.open(map, marker);
  
});