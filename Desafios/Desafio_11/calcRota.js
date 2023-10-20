var map;
var directionsService;
var directionsDisplay;

function initialize() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 0, lng: 0 },
		zoom: 8,
	});
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
}

function calcRoute() {
	var start = localStorage.getItem("LocalPartida");
	var end = localStorage.getItem("LocalDestino");
	var request = {
		origin: start,
		destination: end,
		travelMode: "DRIVING",
	};
	directionsService.route(request, function (result, status) {
		if (status == "OK") {
			directionsDisplay.setDirections(result);
		}
	});
}

google.maps.event.addDomListener(window, "load", initialize);
