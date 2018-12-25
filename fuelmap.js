
    var locations = [
      ['Steve Mills Racing & ACR', 38.843100, -104.860410, 13], //Colorado
      ['WR Racing', 38.840620, -104.693630, 12], //Colorado
      ['GT Racing', 38.902510, -104.864580, 11], //Colorado
      ['Chief Petroleum Co.', 38.833027, -104.843224, 10], //Colorado
      ['Red Performance LLC', 33.788090, -84.423730, 9], //Georgia
      ['VP RACING FUELS SOUTH', 34.266251, -83.472992, 8], //Georgia
      ['Koru Works LLC', 33.950040, -84.539580, 7], //Georgia
      ['Forged Performance LLC', 33.940870, -84.525660, 6], //Georgia
      ['Race Shop', 33.891790, -84.299120, 4], //Georgia
      ['Green Oil Racing / Sunoco Race Fuels', 33.569149, -84.581009, 5], //Georgia
      ['Georgia Kart Sales', 33.830582, -83.840736, 3], //Georgia
      ['VP Racing Fuels South', 34.266251, -83.472992, 2], //Georgia
      ['Fuel Tech USA', 34.301319, -84.416718, 1] //Georgia
      
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(37.090240, -95.712891),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }