

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.9496, lng: -82.4543},
    zoom: 10,
  });
  const z33601 = {lat:27.9475, lng: -82.4588};
  const z33604 = {lat:28.01454, lng: -82.449698};
  const z33607 = {lat:27.972833, lng:-82.556296};
  const z33610 = {lat:28.001528, lng:-82.376779};
  const z33613 = {lat:28.091812, lng:-82.44147};
  const z33616 = {lat:27.86402, lng:-82.530682};
  const z33619 = {lat:27.919386, lng:-82.380352};
  const z33622 = {lat:27.96668400, lng:-82.53858400};
  const z33625 = {lat:28.072387, lng:-82.561246};
  const z33630 = {lat:27.96668400, lng:-82.53858400};
  const z33634 = {lat:28.003866, lng:-82.545317};
  const z33646 = {lat:28.11199900, lng:-82.38441300};
  const z33655 = {lat:27.94978600, lng:-82.45786200};
  const z33662 = {lat:27.97087200, lng:-82.34911500};
  const z33672 = {lat:27.94748600, lng:-82.45972300};
  const z33675 = {lat:27.96384500, lng:-82.43661100};
  const z33680 = {lat:27.99609900, lng:-82.42797700};
  const z33684 = {lat:27.99630600, lng:-82.49497300};
  const z33687 = {lat:28.02864000, lng:-82.39338500};
  const z33694 = {lat:28.08570400, lng:-82.50485900};
  const z33689 = {lat: 27.9496, lng: -82.4543};
  const z33686 = {lat: 27.9473, lng: -82.4588};

  
const marker = new google.maps.Marker({
    position: z33689,
    map,
    title: "33689",
  });
const marker2 = new google.maps.Marker({
    position: z33686,
    map,
    title: "33686",
  });

marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
});
}

//lat: 28.0698, lng: -82.419