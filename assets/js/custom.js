function initMap() {
        var goa = {lat: 45.5166851, lng: -73.5778227};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: goa
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">An address to celebrate</h1>'+
            '<div id="bodyContent">'+
            '<p> Conveniently located in one of South Goas prime locations, ' +
            'just 500 meters away from Betalbatim beach in South Goa.</p>'+
            '</div>'+
            '</div>';

//        var contentString = '<div class="info-window">' +
//                '<h3>An address to celebrate</h3>' +
//                '<div class="info-content">' +
//                '<p>Conveniently located in one of South Goas prime locations, just 500 meters away from Betalbatim beach in South Goa.</p>' +
//                '</div>' +
//                '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: goa,
          map: map,
          title: 'Golden Sands Apartments'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

