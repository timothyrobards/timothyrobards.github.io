// lat: 45.526324, lng: -73.655425

function initMap() {
    var myLatLng = {lat: 45.526324, lng: -73.655425};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng
    });

    var contentString = '<div id="content">'+
        '<h1 id="firstHeading" class="firstHeading"><b>JCorp Inc.</b></h1>'+
        '<div id="bodyContent">'+
        '<p>95 Rue Gince, Saint-Laurent, QC H4N 1J7.</p>'+
        '<p><a href="https://maps.google.com/maps?ll=45.528851,-73.65183&z=14&t=m&hl=en&gl=US&mapclient=embed&q=95%20Rue%20Gince%20Saint-Laurent%2C%20QC%20H4N%201J7">'+
        'View larger map</a></p> '+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    });


    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'J Corp Inc.'
    });

    infowindow.open(map, marker);
    infoWindow.open(map); 
}

