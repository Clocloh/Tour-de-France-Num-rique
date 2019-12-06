<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cartographie</title>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>

    
    <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
 integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
 crossorigin=""></script>
 <script src="L.mytrack.js"></script>  <!-- plugin -->


<style>
    #map { height: 600px;
       
       
        position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
    
    }

</style>

<!-- plugin boxzoom enough styling to make a full-page map -->
<style type="text/css">
    body {
        padding: 0;
        margin: 0;
    }
    html, body, #map {
        height: 100%;
    }
    </style>
</head>
<body onLoad="initMap();">

    
        
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"></script>
        <script src="leaflet-realtime.js"></script>
        <script src="index.js"></script>
        <script>
        function initMap() {    
        var lat = 48.9449133, lng = 2.3613169;
        var map = L.map('map').setView([48.9449133, 2.3613169], 14);

       var position = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xvY2xvaCIsImEiOiJjanRwa3l6cTMwNTdyNDRyenE5bTNpOG5zIn0.P5bjNxk6Pb2zfV4zCyIT4w'
}).addTo(map);



var marker = L.marker([lat, lng]).addTo(map);

var circle = L.circle([48.9449133,2.3613169], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);



marker.bindPopup("<b>BONJOUR!</b><br>Je suis à Paris 8.").openPopup();
circle.bindPopup("Je suis un cercle");


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Vous avez cliqué sur la map à " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);





}




        </script>   
</body>
</html>

