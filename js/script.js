$(document).ready(function() {
  console.log( "ready!" );

  var bgWidth = $('.bg-img').width();
  $('.bg-img').animate({
    opacity: 1.0,
    width: (bgWidth * 1.1),
  }, 8000);

 	$("p, h1, h2, article").hide().fadeIn(8000);
  $("#googleMap").hide().fadeIn(8000);

	function fadeStatement() {
	  $(".statement-home, .statement, .statement-donate").hide().delay(4500).fadeIn(3000);
    $(".donate-bg-fade-delay").hide().delay(10).fadeIn(3500);
	};

	fadeStatement(); 



  //////////////// GMAP //////////////



  var map
  var myCenter=new google.maps.LatLng(40.8447819,-73.8648268);

  function initialize() {
    var mapProp = {
      center:myCenter,
      zoom:13,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });
  }

  function placeMarker(location) {
    
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: '../img/hipster-icon.png',
       map:map,
    draggable:true,
    animation: google.maps.Animation.BOUNCE,
  
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
      content: '<span style="font-size: 1.5em; font-weight: bold; background-color: none;">Hipster Sighting!!!  RED ALERT!!!  HSWAT DISPATCH!!!</span>' + '<br>Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map,marker);
  }

  $('.map-alarm-div').on('click', function(){
    $('.map-alarm-div').addClass('alarm-box');
    $('.map-lower-para').addClass('alarm-bg');
  });

  google.maps.event.addDomListener(window, 'load', initialize);

/////////////



});

