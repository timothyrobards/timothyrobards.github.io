function initMap() {
        var goa = {lat: 15.300652, lng: 73.91198299999996};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: goa
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">An address to celebrate</h1>'+
            '<div id="bodyContent">'+
            '<p> Conveniently located in one of South Goas prime locations, ' +
            'just 500 meters away from Betalbatim beach.</p>'+
            '</div>'+
            '</div>';

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

