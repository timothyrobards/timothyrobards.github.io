function initMap() {
        var goa = {lat: 15.2612109, lng: 73.92996590000007};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: goa
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">The epicentre of luxury and convenience</h1>'+
            '<div id="bodyContent">'+
            '<p>Located near one of Goa’s most famed beaches, the Benaulim Beach.</p>' +
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: goa,
          map: map,
          title: 'Golden Sands Villas'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

