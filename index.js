

let map;
let lastyearavg;
let thisyearavg;
let pricechangepercent = 0;

let zipcode_selecter = document.getElementById("zipcode_select")
let zipcode_selecter_value = zipcode_selecter.value
let zipcode_Submit_Button = document.getElementById("submit_zipcode_button");
let zipcode_yeartrend_button = document.getElementById("submit_yeartrend_button");
zipcode_Submit_Button.addEventListener("click", api_calls);
zipcode_yeartrend_button.addEventListener("click", year_api_call1);
zipcode_yeartrend_button.addEventListener("click", year_api_call2);
zipcode_yeartrend_button.addEventListener("click", pricechange);

let get_apicredits_button = document.getElementById("submit_apicredits_button");
get_apicredits_button.addEventListener("click", get_api_credits)

document.getElementById('zipcode_select').onchange = function () {
  zipcode_selecter_value = zipcode_selecter.value
  console.log(zipcode_selecter_value)
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.9496, lng: -82.4543 },
    zoom: 10,
  });
  const z33601 = { lat: 27.9475, lng: -82.4588 };
  const z33602 = { lat: 27.95364200, lng: -82.45657500 };
  const z33605 = { lat: 27.94914400, lng: -82.42874400 };
  const z33611 = { lat: 27.89058000, lng: -82.50641900 };
  const z33614 = { lat: 28.00660500, lng: -82.50596400 };
  const z33617 = { lat: 28.04234700, lng: -82.39220300 };
  const z33620 = { lat: 28.06179400, lng: -82.41133700 };
  const z33626 = { lat: 28.06279100, lng: -82.61550500 };
  const z33635 = { lat: 28.02574300, lng: -82.61782800 };
  const z33647 = { lat: 28.13133200, lng: -82.35446200 };
  const z33604 = { lat: 28.01454, lng: -82.449698 };
  const z33607 = { lat: 27.972833, lng: -82.556296 };
  const z33610 = { lat: 28.001528, lng: -82.376779 };
  const z33613 = { lat: 28.091812, lng: -82.44147 };
  const z33616 = { lat: 27.86402, lng: -82.530682 };
  const z33619 = { lat: 27.919386, lng: -82.380352 };
  const z33622 = { lat: 27.96668400, lng: -82.53858400 };
  const z33625 = { lat: 28.072387, lng: -82.561246 };
  const z33630 = { lat: 27.96668400, lng: -82.53858400 };
  const z33634 = { lat: 28.003866, lng: -82.545317 };
  const z33646 = { lat: 28.11199900, lng: -82.38441300 };
  const z33655 = { lat: 27.94978600, lng: -82.45786200 };
  const z33662 = { lat: 27.97087200, lng: -82.34911500 };
  const z33672 = { lat: 27.94748600, lng: -82.45972300 };
  const z33675 = { lat: 27.96384500, lng: -82.43661100 };
  const z33680 = { lat: 27.99609900, lng: -82.42797700 };
  const z33684 = { lat: 27.99630600, lng: -82.49497300 };
  const z33687 = { lat: 28.02864000, lng: -82.39338500 };
  const z33694 = { lat: 28.08570400, lng: -82.50485900 };
  const z33686 = { lat: 27.9473, lng: -82.4588 };



  const marker2 = new google.maps.Marker({
    position: z33686,
    map,
    title: "33686",
  });
  const marker3 = new google.maps.Marker({
    position: z33694,
    map,
    title: "33694",
  });
  const marker4 = new google.maps.Marker({
    position: z33687,
    map,
    title: "33687",
  });
  const marker5 = new google.maps.Marker({
    position: z33684,
    map,
    title: "33684",
  });
  const marker6 = new google.maps.Marker({
    position: z33680,
    map,
    title: "33680",
  });
  const marker7 = new google.maps.Marker({
    position: z33675,
    map,
    title: "33675",
  });
  const marker8 = new google.maps.Marker({
    position: z33672,
    map,
    title: "33672",
  });
  const marker9 = new google.maps.Marker({
    position: z33662,
    map,
    title: "33662",
  });
  const marker11 = new google.maps.Marker({
    position: z33655,
    map,
    title: "33655",
  });
  const marker12 = new google.maps.Marker({
    position: z33646,
    map,
    title: "33646",
  });
  const marker13 = new google.maps.Marker({
    position: z33634,
    map,
    title: "33634",
  });
  const marker14 = new google.maps.Marker({
    position: z33630,
    map,
    title: "33630",
  });
  const marker15 = new google.maps.Marker({
    position: z33622,
    map,
    title: "33622",
  });
  const marker16 = new google.maps.Marker({
    position: z33625,
    map,
    title: "33625",
  });
  const marker17 = new google.maps.Marker({
    position: z33619,
    map,
    title: "33619",
  });
  const marker18 = new google.maps.Marker({
    position: z33616,
    map,
    title: "33616",
  });
  const marker19 = new google.maps.Marker({
    position: z33613,
    map,
    title: "33613",
  });
  const marker20 = new google.maps.Marker({
    position: z33610,
    map,
    title: "33610",
  });
  const marker21 = new google.maps.Marker({
    position: z33607,
    map,
    title: "33607",
  });
  const marker22 = new google.maps.Marker({
    position: z33604,
    map,
    title: "33604",
  });
  const marker23 = new google.maps.Marker({
    position: z33601,
    map,
    title: "33601",
  });
  const marker24 = new google.maps.Marker({
    position: z33602,
    map,
    title: "33602",
  });
  const marker25 = new google.maps.Marker({
    position: z33605,
    map,
    title: "33605",
  });
  const marker26 = new google.maps.Marker({
    position: z33611,
    map,
    title: "33611",
  });
  const marker27 = new google.maps.Marker({
    position: z33614,
    map,
    title: "33614",
  });
  const marker28 = new google.maps.Marker({
    position: z33617,
    map,
    title: "33617",
  });
  const marker29 = new google.maps.Marker({
    position: z33620,
    map,
    title: "33620",
  });
  const marker30 = new google.maps.Marker({
    position: z33626,
    map,
    title: "33626",
  });
  const marker31 = new google.maps.Marker({
    position: z33635,
    map,
    title: "33635",
  });
  const marker32 = new google.maps.Marker({
    position: z33647,
    map,
    title: "33647",
  });
const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">33626</h1>' +
    '<div id="bodyContent">' +
    '<img src="https://th.bing.com/th/id/R.f8de8bd39e19a58d2839a16638951cc2?rik=i5Er7piO6IwbzQ&riu=http%3a%2f%2fpluto.matrix49.com%2f16386%2fsubpages%2fcourse+gallery%2fWestchase-Golf-Club-FL-hole-3a.jpg&ehk=5sntm4Nb3%2b2eIMJ2ff6DkDMVfZNX3kFJU0fq2bIKv3A%3d&risl=&pid=ImgRaw&r=0" width="200" height="125">'+ 
    '<img src="https://th.bing.com/th/id/R.76529041cd674354d4445e4b34e5e911?rik=HcDXuyNG8CzB4g&riu=http%3a%2f%2fi1.wp.com%2fwww.lianejamason.com%2fwp-content%2fuploads%2f2010%2f11%2fwestchase-tampa-real-estate.jpg&ehk=GXZky8LcBwKBupWQyc%2bgcxjsok2B3vxu%2fbG6jLEwJ4U%3d&risl=&pid=ImgRaw&r=0" width="200" height="125">' +
    "</div>" +
    "</div>";
  
	
	const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  marker30.addListener("click", () => {
    infowindow.open({
      anchor: marker30,
      map,
      shouldFocus: false,
    });
  });
}
function get_api_credits() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/auth",
    type: "GET",
    data: {
      "api_key": "4_HAGZ7o7Sw6FUqagGVrOg",
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      alert("Testing fetching data from API \nmy account email is: " + data.account_email +
        "\nand I have " + data.credits_remaining + " credits remaining!")

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });

}
function api_calls() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 365,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      alert("Average rent for this zipcode is: " + data.mean + "$")
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
}

function year_api_call1() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 445,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lastyearavg = data.mean;
      console.log(lastyearavg);
      
    
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });

}
function year_api_call2() {
  jQuery.ajax({
    url: "https://www.rentometer.com/api/v1/summary",
    type: "GET",
    data: {
      "api_key": "gMIZX7yK85rmOa8orJmeoA",
      "address": zipcode_selecter_value,
      "bedrooms": "2",
      "baths": "1.5+",
      "building_type": "apartment",
      "look_back_days": 90,
    },
  })
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      thisyearavg = data.mean;
      console.log(thisyearavg);
      pricechangepercent = thisyearavg/lastyearavg;
      console.log(pricechangepercent);
      pricechangepercent = ((pricechangepercent - 1) * 100);
      console.log(pricechangepercent);

      
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
    
    
}
function sleep(time){
  return new Promise((resolve)=>setTimeout(resolve,time)
)
}
async function pricechange() {
  await sleep(2000);
  alert("Rental Change From Last Year is: " + pricechangepercent  + "%");
}
