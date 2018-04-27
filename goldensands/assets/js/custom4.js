function initMap() {
        var goa = {lat: 15.273525, lng: 73.95913480000002};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: goa
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Centrally located in Margao</h1>'+
            '<div id="bodyContent">'+
            '<p>Margao is considered to be the second capital of Goa for its religious, cultural and commercial importance.</p>' +
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: goa,
          map: map,
          title: 'Mabai Complex'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

