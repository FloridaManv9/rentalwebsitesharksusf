

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
  //const z33622 = {lat:, lng:};
  //const z33625 = {lat:, lng:};
  //const z33630 = {lat:, lng:};
  //const z33634 = {lat:, lng:};
  //const z33646 = {lat:, lng:};
  //const z33655 = {lat:, lng:};
  //const z33662 = {lat:, lng:};
  //const z33672 = {lat:, lng:};
  //const z33675 = {lat:, lng:};
  //const z33680 = {lat:, lng:};
  //const z33684 = {lat:, lng:};
  //const z33687 = {lat:, lng:};
  //const z33694 = {lat:, lng:};
  const z33689 = { lat: 27.9496, lng: -82.4543};
  const z33686 = { lat: 27.9473, lng: -82.4588};

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