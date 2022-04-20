

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
    center: { lat: 27.7567667, lng: -81.4639835 },
    zoom: 7,
    restriction: {
      latLngBounds: {
        north: 34.5,
        south: 24,
        east: -75,
        west: -89,
      },
    },
  });
  const Jacksonville = { lat: 30.3, lng: -81.7 };
  const Miami = { lat: 25.7617, lng: -80.1918 };
  const Tampa = { lat: 28.0, lng: -82.5 };
  const Orlando = { lat: 28.5, lng: -81.4 };
  const StPetersburg = { lat: 27.8, lng: -82.6 };
  const Hialeah = { lat: 25.8576, lng: -80.2781 };
  const PortStLucie = { lat: 27.3, lng: -80.4 };
  const Tallahasse = { lat: 30.46, lng: -84.28 };
  const FortLauderdale = { lat: 26.1, lng: -80.1 };
  const Hollywood = { lat: 26.0, lng: -80.2 };
  const Gainesville = { lat: 29.7, lng: -82.3 };
  const LehighAcres = { lat: 26.6253, lng: -81.6248 };
  const Clearwater = { lat: 27.9659, lng: -82.8001 };
  const Brandon = { lat: 27.9378, lng: -82.2859 };
  const Palmbay = { lat: 28.0345, lng: -80.5887 };
  const Springhill = { lat: 28.4823, lng: -82.5370 };
  const PompanoBeach = { lat: 26.2379, lng: -80.1248 };
  const WestPalmBeach = { lat: 26.7153, lng: -80.0534 };
  const Lakeland = { lat: 28.0395, lng: -81.9498 };
  const Riverview = { lat: 27.8661, lng: -82.3265 };
  const Bocaraton = { lat: 26.3683, lng: -80.1289 };
  const Ocala = { lat: 29.1872, lng: -82.1401 };
  const DaytonaBeach = { lat: 29.2108, lng: -81.0228 };
  const StAugustine = { lat: 29.9012, lng: -81.3124 };
  const PanamaCity = { lat: 30.1588, lng: -85.6602 };
  const Pensacola = { lat: 30.4213, lng: -87.2169 };
  const FortMyers = { lat: 26.6406, lng: -81.8723 };




  const m_Jacksonville = new google.maps.Marker({
    position: Jacksonville,
    map,
    title: "Jacksonville",
  });
  const m_Miami = new google.maps.Marker({
    position: Miami,
    map,
    title: "Miami",
  });
  const m_Tampa = new google.maps.Marker({
    position: Tampa,
    map,
    title: "Tampa",
  });
  const m_Orlando = new google.maps.Marker({
    position: Orlando,
    map,
    title: "Orlando",
  });
  const m_StPetersburg = new google.maps.Marker({
    position: StPetersburg,
    map,
    title: "StPetersburg",
  });
  const m_Hialeah = new google.maps.Marker({
    position: Hialeah,
    map,
    title: "Hialeah",
  });
  const m_PortStLucie = new google.maps.Marker({
    position: PortStLucie,
    map,
    title: "PortStLucie",
  });
  const m_Tallahasse = new google.maps.Marker({
    position: Tallahasse,
    map,
    title: "Tallahasse",
  });
  const m_FortLauderdale = new google.maps.Marker({
    position: FortLauderdale,
    map,
    title: "FortLauderdale",
  });
  const m_Hollywood = new google.maps.Marker({
    position: Hollywood,
    map,
    title: "Hollywood",
  });
  const m_Gainesville = new google.maps.Marker({
    position: Gainesville,
    map,
    title: "Gainesville",
  });
  const m_LehighAcres = new google.maps.Marker({
    position: LehighAcres,
    map,
    title: "LehighAcres",
  });
  const m_Clearwater = new google.maps.Marker({
    position: Clearwater,
    map,
    title: "Clearwater",
  });
  const m_Brandon = new google.maps.Marker({
    position: Brandon,
    map,
    title: "Brandon ",
  });
  const m_Palmbay = new google.maps.Marker({
    position: Palmbay,
    map,
    title: "Palmbay",
  });
  const m_Springhill = new google.maps.Marker({
    position: Springhill,
    map,
    title: "SpringHill",
  });
  const m_PompanoBeach = new google.maps.Marker({
    position: PompanoBeach,
    map,
    title: "PompanoBeach",
  });
  const m_WestPalmBeach = new google.maps.Marker({
    position: WestPalmBeach,
    map,
    title: "WestPalmBeach",
  });
  const m_Lakeland = new google.maps.Marker({
    position: Lakeland,
    map,
    title: "Lakeland",
  });
  const m_Riverview = new google.maps.Marker({
    position: Riverview,
    map,
    title: "Riverview",
  });
  const m_Bocaraton = new google.maps.Marker({
    position: Bocaraton,
    map,
    title: "Bocaraton",
  });
  const m_Ocala = new google.maps.Marker({
    position: Ocala,
    map,
    title: "Ocala",
  });
  const m_DaytonaBeach = new google.maps.Marker({
    position: DaytonaBeach,
    map,
    title: "DaytonaBeach",
  });
  const m_StAugustine = new google.maps.Marker({
    position: StAugustine,
    map,
    title: "StAugustine",
  });
  const m_PanamaCity = new google.maps.Marker({
    position: PanamaCity,
    map,
    title: "PanamaCity",
  });
  const m_Pensacola = new google.maps.Marker({
    position: Pensacola,
    map,
    title: "Pensacola",
  });
  const m_FortMyers = new google.maps.Marker({
    position: FortMyers,
    map,
    title: "FortMyers",
  });

  const info_Jacksonville =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jacksonville</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $746</p> \n <p>1 bedroom: $921</p> \n <p>2 bedroom: $1113</p> \n <p>3 bedroom: $1455 </p> \n" +
    "<p>4 bedroom: $1852</p>"
  "</div>" +
    "</div>";


  const info_Miami =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Miami</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1057</p> \n <p>1 bedroom: $1231</p> \n <p>2 bedroom: $1551</p> \n <p>3 bedroom: $2068 </p> \n" +
    "<p>4 bedroom: $2483</p>"
  "</div>" +
    "</div>";


  const info_Tampa =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tampa</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_Orlando =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Orlando</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1055</p> \n <p>1 bedroom: $1140</p> \n <p>2 bedroom: $1321</p> \n <p>3 bedroom: $1713 </p> \n" +
    "<p>4 bedroom: $2057</p>"
  "</div>" +
    "</div>";


  const info_StPetersburg =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">St.Petersburg</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_Hialeah =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hialeah</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1057</p> \n <p>1 bedroom: $1231</p> \n <p>2 bedroom: $1551</p> \n <p>3 bedroom: $2068 </p> \n" +
    "<p>4 bedroom: $2483</p>"
  "</div>" +
    "</div>";


  const info_PortStLucie =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Port St. Lucie</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $926</p> \n <p>1 bedroom: $932</p> \n <p>2 bedroom: $1211</p> \n <p>3 bedroom: $1618 </p> \n" +
    "<p>4 bedroom: $1830</p>"
  "</div>" +
    "</div>";


  const info_Tallahasse =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tallahasse</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $778</p> \n <p>1 bedroom: $843</p> \n <p>2 bedroom: $1024</p> \n <p>3 bedroom: $1361 </p> \n" +
    "<p>4 bedroom: $1484</p>"
  "</div>" +
    "</div>";



  const info_FortLauderdale =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Fort Lauderdale</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1059</p> \n <p>1 bedroom: $1198</p> \n <p>2 bedroom: $1510</p> \n <p>3 bedroom: $2161 </p> \n" +
    "<p>4 bedroom: $2614</p>"
  "</div>" +
    "</div>";





  const info_Hollywood =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hollywood</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1059</p> \n <p>1 bedroom: $1198</p> \n <p>2 bedroom: $1510</p> \n <p>3 bedroom: $2161 </p> \n" +
    "<p>4 bedroom: $2614</p>"
  "</div>" +
    "</div>";



  const info_Gainesville =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Gainesville</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $805</p> \n <p>1 bedroom: $897</p> \n <p>2 bedroom: $1083</p> \n <p>3 bedroom: $1415 </p> \n" +
    "<p>4 bedroom: $1469</p>"
  "</div>" +
    "</div>";




  const info_LehighAcres =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Lehigh Acres</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $931</p> \n <p>1 bedroom: $951</p> \n <p>2 bedroom: $1197</p> \n <p>3 bedroom: $1559 </p> \n" +
    "<p>4 bedroom: $1762</p>"
  "</div>" +
    "</div>";


  const info_Clearwater =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Clearwater</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_Brandon =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Brandon</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_Palmbay =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Palmbay</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $759</p> \n <p>1 bedroom: $921</p> \n <p>2 bedroom: $1134</p> \n <p>3 bedroom: $1525 </p> \n" +
    "<p>4 bedroom: $1826</p>"
  "</div>" +
    "</div>";


  const info_Springhill =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Springhill</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_PompanoBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pompano Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $1059</p> \n <p>1 bedroom: $1198</p> \n <p>2 bedroom: $1510</p> \n <p>3 bedroom: $2161 </p> \n" +
    "<p>4 bedroom: $2614</p>"
  "</div>" +
    "</div>";


  const info_WestPalmBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">West Palm Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $983</p> \n <p>1 bedroom: $1180</p> \n <p>2 bedroom: $1468</p> \n <p>3 bedroom: $1984 </p> \n" +
    "<p>4 bedroom: $2387</p>"
  "</div>" +
    "</div>";


  const info_Lakeland =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Lakeland</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $794</p> \n <p>1 bedroom: $799</p> \n <p>2 bedroom: $1023</p> \n <p>3 bedroom: $1375 </p> \n" +
    "<p>4 bedroom: $1764</p>"
  "</div>" +
    "</div>";


  const info_Riverview =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Riverview</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $989</p> \n <p>1 bedroom: $1040</p> \n <p>2 bedroom: $1271</p> \n <p>3 bedroom: $1651 </p> \n" +
    "<p>4 bedroom: $2028</p>"
  "</div>" +
    "</div>";


  const info_BocaRaton =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Boca Raton</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $983</p> \n <p>1 bedroom: $1180</p> \n <p>2 bedroom: $1468</p> \n <p>3 bedroom: $1984 </p> \n" +
    "<p>4 bedroom: $2387</p>"
  "</div>" +
    "</div>";


  const info_Ocala =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ocala</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $692</p> \n <p>1 bedroom: $757</p> \n <p>2 bedroom: $939</p> \n <p>3 bedroom: $1266 </p> \n" +
    "<p>4 bedroom: $1356</p>"
  "</div>" +
    "</div>";


  const info_DaytonaBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Daytona Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $693</p> \n <p>1 bedroom: $856</p> \n <p>2 bedroom: $1050</p> \n <p>3 bedroom: $1406 </p> \n" +
    "<p>4 bedroom: $1537</p>"
  "</div>" +
    "</div>";


  const info_StAugustine =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">St. Augustine</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $746</p> \n <p>1 bedroom: $921</p> \n <p>2 bedroom: $1113</p> \n <p>3 bedroom: $1455 </p> \n" +
    "<p>4 bedroom: $1852</p>"
  "</div>" +
    "</div>";


  const info_PanamaCity =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Panama City</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $855</p> \n <p>1 bedroom: $933</p> \n <p>2 bedroom: $1088</p> \n <p>3 bedroom: $1515 </p> \n" +
    "<p>4 bedroom: $1784</p>"
  "</div>" +
    "</div>";

  const info_FortMyers =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Fort Myers</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $931</p> \n <p>1 bedroom: $951</p> \n <p>2 bedroom: $1197</p> \n <p>3 bedroom: $1559 </p> \n" +
    "<p>4 bedroom: $1762</p>"
  "</div>" +
    "</div>";

  const info_Pensacola =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pensacola</h1>' +
    '<div id="bodyContent">' +
    "<p>Average Rent</p>  \n <p>0 bedroom: $776</p> \n <p>1 bedroom: $840</p> \n <p>2 bedroom: $987</p> \n <p>3 bedroom: $1385 </p> \n" +
    "<p>4 bedroom: $1709</p>"
  "</div>" +
    "</div>";

  //Jacksonville Info window
  const infowindow_Jacksonville = new google.maps.InfoWindow({
    content: info_Jacksonville,
  });
  m_Jacksonville.addListener("click", () => {
    infowindow_Jacksonville.open({
      anchor: m_Jacksonville,
      map,
      shouldFocus: false,
    });
  });
  //Jacksonville Info Window


  //Miami Info Window
  const infowindow_Miami = new google.maps.InfoWindow({
    content: info_Miami,
  });
  m_Miami.addListener("click", () => {
    infowindow_Miami.open({
      anchor: m_Miami,
      map,
      shouldFocus: false,
    });
  });
  //Miami Info Window


  //Tampa Info Window
  const infowindow_Tampa = new google.maps.InfoWindow({
    content: info_Tampa,
  });
  m_Tampa.addListener("click", () => {
    infowindow_Tampa.open({
      anchor: m_Tampa,
      map,
      shouldFocus: false,
    });
  });
  //Tampa Info Window


  //Orlando Info Window
  const infowindow_Orlando = new google.maps.InfoWindow({
    content: info_Orlando,
  });
  m_Orlando.addListener("click", () => {
    infowindow_Orlando.open({
      anchor: m_Orlando,
      map,
      shouldFocus: false,
    });
  });
  //Orlando Info Window


  //StPetersburg Info Window
  const infowindow_StPetersBurg = new google.maps.InfoWindow({
    content: info_StPetersburg,
  });
  m_StPetersburg.addListener("click", () => {
    infowindow_StPetersBurg.open({
      anchor: m_StPetersburg,
      map,
      shouldFocus: false,
    });
  });
  //StPetersburg Info Window


  //Hialeah Info Window
  const infowindow_Hialeah = new google.maps.InfoWindow({
    content: info_Hialeah,
  });
  m_Hialeah.addListener("click", () => {
    infowindow_Hialeah.open({
      anchor: m_Hialeah,
      map,
      shouldFocus: false,
    });
  });
  //Hialeah Info Window


  //PortStLucie Info Window
  const infowindow_PortStLucie = new google.maps.InfoWindow({
    content: info_PortStLucie,
  });
  m_PortStLucie.addListener("click", () => {
    infowindow_PortStLucie.open({
      anchor: m_PortStLucie,
      map,
      shouldFocus: false,
    });
  });
  //PortStLucie Info Window


  //Tallahasse Info Window
  const infowindow_Tallahasse = new google.maps.InfoWindow({
    content: info_Tallahasse,
  });
  m_Tallahasse.addListener("click", () => {
    infowindow_Tallahasse.open({
      anchor: m_Tallahasse,
      map,
      shouldFocus: false,
    });
  });
  //Tallahasse Info Window


  //FortLauderdale Info Window
  const infowindow_FortLauderdale = new google.maps.InfoWindow({
    content: info_FortLauderdale,
  });
  m_FortLauderdale.addListener("click", () => {
    infowindow_FortLauderdale.open({
      anchor: m_FortLauderdale,
      map,
      shouldFocus: false,
    });
  });
  //FortLauderdale Info Window





  //Hollywood Info Window
  const infowindow_Hollywood = new google.maps.InfoWindow({
    content: info_Hollywood,
  });
  m_Hollywood.addListener("click", () => {
    infowindow_Hollywood.open({
      anchor: m_Hollywood,
      map,
      shouldFocus: false,
    });
  });




  //Gainesville Info Window
  const infowindow_Gainesville = new google.maps.InfoWindow({
    content: info_Gainesville,
  });
  m_Gainesville.addListener("click", () => {
    infowindow_Gainesville.open({
      anchor: m_Gainesville,
      map,
      shouldFocus: false,
    });
  });
  //Gainesville Info Window




  //LehighAcres Info Window
  const infowindow_LehighAcres = new google.maps.InfoWindow({
    content: info_LehighAcres,
  });
  m_LehighAcres.addListener("click", () => {
    infowindow_LehighAcres.open({
      anchor: m_LehighAcres,
      map,
      shouldFocus: false,
    });
  });
  //LehighAcres Info Window


  //Clearwater Info Window
  const infowindow_Clearwater = new google.maps.InfoWindow({
    content: info_Clearwater,
  });
  m_Clearwater.addListener("click", () => {
    infowindow_Clearwater.open({
      anchor: m_Clearwater,
      map,
      shouldFocus: false,
    });
  });
  //Clearwater Info Window


  //Brandon Info Window
  const infowindow_Brandon = new google.maps.InfoWindow({
    content: info_Brandon,
  });
  m_Brandon.addListener("click", () => {
    infowindow_Brandon.open({
      anchor: m_Brandon,
      map,
      shouldFocus: false,
    });
  });
  //Brandon Info Window


  //Palmbay Info Window
  const infowindow_Palmbay = new google.maps.InfoWindow({
    content: info_Palmbay,
  });
  m_Palmbay.addListener("click", () => {
    infowindow_Palmbay.open({
      anchor: m_Palmbay,
      map,
      shouldFocus: false,
    });
  });
  //Palmbay Info Window


  //Springhill Info Window
  const infowindow_Springhill = new google.maps.InfoWindow({
    content: info_Springhill,
  });
  m_Springhill.addListener("click", () => {
    infowindow_Springhill.open({
      anchor: m_Springhill,
      map,
      shouldFocus: false,
    });
  });
  //Springhill Info Window


  //PompanoBeach Info Window
  const infowindow_PompanoBeach = new google.maps.InfoWindow({
    content: info_PompanoBeach,
  });
  m_PompanoBeach.addListener("click", () => {
    infowindow_PompanoBeach.open({
      anchor: m_PompanoBeach,
      map,
      shouldFocus: false,
    });
  });
  //PompanoBeach Info Window


  //WestPalmBeach Info Window
  const infowindow_WestPalmBeach = new google.maps.InfoWindow({
    content: info_WestPalmBeach,
  });
  m_WestPalmBeach.addListener("click", () => {
    infowindow_WestPalmBeach.open({
      anchor: m_WestPalmBeach,
      map,
      shouldFocus: false,
    });
  });
  //WestPalmBeach Info Window


  //Lakeland Info Window
  const infowindow_Lakeland = new google.maps.InfoWindow({
    content: info_Lakeland,
  });
  m_Lakeland.addListener("click", () => {
    infowindow_Lakeland.open({
      anchor: m_Lakeland,
      map,
      shouldFocus: false,
    });
  });
  //Lakeland Info Window


  //Riverview Info Window
  const infowindow_Riverview = new google.maps.InfoWindow({
    content: info_Riverview,
  });
  m_Riverview.addListener("click", () => {
    infowindow_Riverview.open({
      anchor: m_Riverview,
      map,
      shouldFocus: false,
    });
  });
  //Riverview Info Window


  //BocaRaton Info Window
  const infowindow_BocaRaton = new google.maps.InfoWindow({
    content: info_BocaRaton,
  });
  m_Bocaraton.addListener("click", () => {
    infowindow_BocaRaton.open({
      anchor: m_Bocaraton,
      map,
      shouldFocus: false,
    });
  });
  //BocaRaton Info Window


  //Ocala Info Window
  const infowindow_Ocala = new google.maps.InfoWindow({
    content: info_Ocala,
  });
  m_Ocala.addListener("click", () => {
    infowindow_Ocala.open({
      anchor: m_Ocala,
      map,
      shouldFocus: false,
    });
  });
  //Ocala Info Window


  //DaytonaBeach Info Window
  const infowindow_DaytonaBeach = new google.maps.InfoWindow({
    content: info_DaytonaBeach,
  });
  m_DaytonaBeach.addListener("click", () => {
    infowindow_DaytonaBeach.open({
      anchor: m_DaytonaBeach,
      map,
      shouldFocus: false,
    });
  });


  //StAugustine Info Window
  const infowindow_StAugustine = new google.maps.InfoWindow({
    content: info_StAugustine,
  });
  m_StAugustine.addListener("click", () => {
    infowindow_StAugustine.open({
      anchor: m_StAugustine,
      map,
      shouldFocus: false,
    });
  });
  //StAugustine Info Window


  //PanamaCity Info Window
  const infowindow_PanamaCity = new google.maps.InfoWindow({
    content: info_PanamaCity,
  });
  m_PanamaCity.addListener("click", () => {
    infowindow_PanamaCity.open({
      anchor: m_PanamaCity,
      map,
      shouldFocus: false,
    });
  });
  //PanamaCity Info Window

  //FortMyers Info Window
  const infowindow_FortMyers = new google.maps.InfoWindow({
    content: info_FortMyers,
  });
  m_FortMyers.addListener("click", () => {
    infowindow_FortMyers.open({
      anchor: m_FortMyers,
      map,
      shouldFocus: false,
    });
  });
  //FortMyers Info Window

  //Pensacola Info Window
  const infowindow_Pensacola = new google.maps.InfoWindow({
    content: info_Pensacola,
  });
  m_Pensacola.addListener("click", () => {
    infowindow_Pensacola.open({
      anchor: m_Pensacola,
      map,
      shouldFocus: false,
    });
  });
  //Pensacola Info Window
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
      pricechangepercent = thisyearavg / lastyearavg;
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
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time)
  )
}
async function pricechange() {
  await sleep(2000);
  alert("Rental Change From Last Year is: " + pricechangepercent + "%");
}
