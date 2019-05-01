function initMap() {
        var goa = {lat: 15.2614041, lng: 73.94511109999996};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: goa
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Not just a location, it’s a landmark</h1>'+
            '<div id="bodyContent">'+
            '<p>Only 2.5km away from Benaulim beach with excellent commuting options.</p>' +
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: goa,
          map: map,
          title: 'Quality Living'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

