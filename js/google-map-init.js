function initMap() {
    var innovation = {lat: -43.535244, lng: 172.641123};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: innovation,
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: false,
        disableDoubleClickZoom: true, 
        styles:[{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]},{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#E6E6E6"}]},{"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]},{"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100},{"lightness": 0}]},{"featureType": 'road', "elementType": 'labels.text.fill', "stylers": [{color: '#000000'}]},{"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "all", "stylers": [{"color": "#B2B2B2"},{"visibility": "on"}]}]
    });
    
    var worldCoords = [
new google.maps.LatLng(-85.1054596961173, -180),
new google.maps.LatLng(85.1054596961173, -180),
new google.maps.LatLng(85.1054596961173, 180),
new google.maps.LatLng(-85.1054596961173, 180),
new google.maps.LatLng(-85.1054596961173, 0)];


var precinctCoords = [
new google.maps.LatLng(-43.534098, 172.639449),
new google.maps.LatLng(-43.536498, 172.639449),
new google.maps.LatLng(-43.536498, 172.642895),
new google.maps.LatLng(-43.534098, 172.642895)];


// Construct
poly = new google.maps.Polygon({
    paths: [worldCoords,precinctCoords],
    strokeColor: '#F5AE0C',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#F5AE0C',
    fillOpacity: 0.8,
     map: map
});
}
	