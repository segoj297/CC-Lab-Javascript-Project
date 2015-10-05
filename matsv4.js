var mapOptions = {
    center: new google.maps.LatLng(40.735169, -73.992800

),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.TERRAIN
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(40.735169, -73.992800

)
};

var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var infoWindowOptions = {
    content: 'Utrecht Art Supplies East 13th Street'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){
  
  infoWindow.open(map, marker);
  
});