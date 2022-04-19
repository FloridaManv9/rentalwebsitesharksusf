

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
        west: -88,
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
  const CapeCoral = { lat: 26.6, lng: -82.0 };
  const FortLauderdale = { lat: 26.1, lng: -80.1 };
  const PembrokePines = { lat: 26.0078, lng: -80.2963 };
  const Hollywood = { lat: 26.0, lng: -80.2 };
  const Miramar = { lat: 25.9861, lng: -80.3036 };
  const Gainesville = { lat: 29.7, lng: -82.3 };
  const CoralSprings = { lat: 26.2712, lng: -80.2706 };
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
  const PanamaCity = { lat: 8.9824, lng: -79.5199 };




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
  const m_CapeCoral = new google.maps.Marker({
    position: CapeCoral,
    map,
    title: "CapeCoral",
  });
  const m_FortLauderdale = new google.maps.Marker({
    position: FortLauderdale,
    map,
    title: "FortLauderdale",
  });
  const m_PembrokePines = new google.maps.Marker({
    position: PembrokePines,
    map,
    title: "PembrokePines",
  });
  const m_Hollywood = new google.maps.Marker({
    position: Hollywood,
    map,
    title: "Hollywood",
  });
  const m_Miramar = new google.maps.Marker({
    position: Miramar,
    map,
    title: "Miramar",
  });
  const m_Gainesville = new google.maps.Marker({
    position: Gainesville,
    map,
    title: "Gainesville",
  });
  const m_CoralSprings = new google.maps.Marker({
    position: CoralSprings,
    map,
    title: "CoralSprings",
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


  const info_Jacksonville =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jacksonville</h1>' +
    '<div id="bodyContent">' +
    "<p>Jacksonville is a city located on the Atlantic coast of Florida, the most populous city in the state, and is" +
    "the largest city by area in the contiguous United States as of 2020. It is the seat of Duval County," +
    "with which the city government consolidated in 1968. Consolidation gave Jacksonville" +
    "its great size and placed most of its metropolitan population within the city" +
    "limits.As of 2020, Jacksonville's population is 949,611, making it the 12th most populous city in the U.S." +
    " Source: https://en.wikipedia.org/wiki/Jacksonville,_Florida</p > "
  "</div>" +
    "</div>";


  const info_Miami =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Miami</h1>' +
    '<div id="bodyContent">' +
    "<p>Miami, officially the City of Miami, is a coastal metropolis located in Miami-Dade County in southeastern Florida" +
    "(United States).With a population of 442, 241 as of the 2020 census, [2] it is the second - most populous" +
    "city in Florida, eleventh - most populous city in the Southeast, and 44th - most populous city in the United States." +
    "Source: https://en.wikipedia.org/wiki/Miami</p >"
  "</div>" +
    "</div>";


  const info_Tampa =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tampa</h1>' +
    '<div id="bodyContent">' +
    "<p>Tampa is a major city on the Gulf Coast of the U.S. state of Florida. The city's borders include the north shore of Tampa Bay and the east shore of Old Tampa Bay. Tampa is the largest city in the Tampa Bay area and the seat of Hillsborough County. With a population of 384,959 according to the 2020 census, Tampa is the third-most populated city in Florida after Jacksonville and Miami and is the 52nd most populated city in the United States." +
    "Source: https://en.wikipedia.org/wiki/Tampa,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Orlando =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Orlando</h1>' +
    '<div id="bodyContent">' +
    "<p>Orlando is a city in the U.S. state of Florida and is the county seat of Orange County. In Central Florida, it is the center of the Orlando metropolitan area, which had a population of 2,509,831, according to U.S. Census Bureau figures released in July 2017, making it the 23rd-largest metropolitan area in the United States, the sixth-largest metropolitan area in the Southern United States, and the third-largest metropolitan area in Florida behind Miami and Tampa." +
    "Source: https://en.wikipedia.org/wiki/Orlando,_Florida</p >"
  "</div>" +
    "</div>";


  const info_StPetersburg =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">St.Petersburg</h1>' +
    '<div id="bodyContent">' +
    "<p>St. Petersburg is a city in Pinellas County, Florida, United States. As of the 2020 census estimate, the population was 271,842, making it the fifth-most populous city in Florida, the second-largest city in the Tampa Bay Area, after Tampa, and the largest in the state that is not a county seat (the city of Clearwater is the seat of Pinellas County)." +
    "Source: https://en.wikipedia.org/wiki/St._Petersburg,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Hialeah =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hialeah</h1>' +
    '<div id="bodyContent">' +
    "<p>Hialeah is a city in Miami-Dade County, Florida, United States. With a population of 223,109 as of the 2020 census, Hialeah is the sixth-largest city in Florida. It is a principal city of the Miami metropolitan area, which was home to an estimated 6,198,782 people at the 2018 census." +
    "Source: https://en.wikipedia.org/wiki/Hialeah,_Florida</p >"
  "</div>" +
    "</div>";


  const info_PortStLucie =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Port St. Lucie</h1>' +
    '<div id="bodyContent">' +
    "<p>Port St. Lucie is a city in St. Lucie County, Florida, United States. It is the most populous municipality in the county with a population of 204,851 at the 2020 census. It is located 125 miles (201 km) southeast of Orlando and 113 miles (182 km) north of Miami." +
    "Source: https://en.wikipedia.org/wiki/Port_St._Lucie,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Tallahasse =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tallahasse</h1>' +
    '<div id="bodyContent">' +
    "<p>Tallahassee is the capital city of the U.S. state of Florida. It is the county seat and only incorporated municipality in Leon County. Tallahassee became the capital of Florida, then the Florida Territory, in 1824. In 2020, the population was 196,169, making it the 8th-largest city in the U.S state of Florida, and the 126th-largest city in the United States." +
    "Source: https://en.wikipedia.org/wiki/Tallahassee,_Florida</p >"
  "</div>" +
    "</div>";


  const info_CapeCoral =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Cape Coral</h1>' +
    '<div id="bodyContent">' +
    "<p>Cape Coral is a city located in Lee County, Florida, United States, on the Gulf of Mexico. Founded in 1957 and developed as a planned community, the city's population has grown to 194,016 as of the 2020 Census, a rise of 26% from the 2010 Census, making it the 117th most populous city in the United States." +
    "Source: https://en.wikipedia.org/wiki/Cape_Coral,_Florida</p >"
  "</div>" +
    "</div>";


  const info_FortLauderdale =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Fort Lauderdale</h1>' +
    '<div id="bodyContent">' +
    "<p>Fort Lauderdale is a coastal city located in the U.S. state of Florida, 25 miles (40 km) north of Miami along the Atlantic Ocean. It is the county seat and largest city in Broward County with a population of 182,760 as of the 2020 Census making it the tenth largest city in Florida." +
    "Source: https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida</p >"
  "</div>" +
    "</div>";


  const info_PembrokePines =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pembroke Pines</h1>' +
    '<div id="bodyContent">' +
    "<p>Pembroke Pines is a city in southern Broward County, Florida, United States. The city is located 22 miles (35 km) north of Miami. The population of Pembroke Pines is 171,178 as of the 2020 census." +
    "Source: https://en.wikipedia.org/wiki/Pembroke_Pines,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Hollywood =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hollywood</h1>' +
    '<div id="bodyContent">' +
    "<p>Hollywood is a city in southern Broward County, Florida, United States, located between Fort Lauderdale and Miami.[5] As of July 1, 2019, Hollywood had a population of 154,817." +
    "Source: https://en.wikipedia.org/wiki/Hollywood,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Miramar =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Miramar</h1>' +
    '<div id="bodyContent">' +
    "<p>Miramar is a city in southern Broward County, Florida, United States. As of the 2020 census, the population was 134,721. It is a principal city of the Miami metropolitan area, which is home to approximately six million people." +
    "Source: https://en.wikipedia.org/wiki/Miramar,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Gainesville =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Gainesville</h1>' +
    '<div id="bodyContent">' +
    "<p>Gainesville is the county seat of Alachua County, Florida, and the largest city in North Central Florida, with a population of 141,085 in 2020.[6] It is the principal city of the Gainesville metropolitan area, which had a population of 339,247 in 2020." +
    "Source: https://en.wikipedia.org/wiki/Gainesville,_Florida</p >"
  "</div>" +
    "</div>";


  const info_CoralSprings =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Coral Springs</h1>' +
    '<div id="bodyContent">' +
    "<p>Coral Springs, officially the City of Coral Springs, is a city in Broward County, Florida, United States, approximately 20 miles (32 km) northwest of Fort Lauderdale. As of the 2010 United States Census, the city had a population of 121,096.[" +
    "Source: https://en.wikipedia.org/wiki/Coral_Springs,_Florida</p >"
  "</div>" +
    "</div>";


  const info_LehighAcres =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Coral Springs</h1>' +
    '<div id="bodyContent">' +
    "<p>Lehigh Acres is an unincorporated area and census-designated place (CDP) in Lee County, Florida, United States. As of the 2010 census the population was 86,784,[4] and as of 2017 the population was estimated to be over 124,000." +
    "Source: https://en.wikipedia.org/wiki/Lehigh_Acres,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Clearwater =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Coral Springs</h1>' +
    '<div id="bodyContent">' +
    "<p>Clearwater is a city located in Pinellas County, Florida, United States, northwest of Tampa and St. Petersburg. To the west of Clearwater lies the Gulf of Mexico and to the southeast lies Tampa Bay. As of the 2010 census, the city had a population of 107,685." +
    "Source: https://en.wikipedia.org/wiki/Clearwater,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Brandon =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Brandon</h1>' +
    '<div id="bodyContent">' +
    "<p>Brandon is an unincorporated community and census-designated place (CDP) in Hillsborough County, Florida, United States. It is part of the Tampa–St. Petersburg–Clearwater Metropolitan Statistical Area. The population was 114,626 at the 2020 census,[5] up from 103,483 at the 2010 census." +
    "Source: https://en.wikipedia.org/wiki/Brandon,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Palmbay =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Palmbay</h1>' +
    '<div id="bodyContent">' +
    "<p>Palm Bay is a city in Brevard County, Florida, United States. The city's population was 119,760 at the 2020 United States Census, making it the most populous city in the county and the largest by land mass." +
    "Source: https://en.wikipedia.org/wiki/Palm_Bay,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Springhill =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Springhill</h1>' +
    '<div id="bodyContent">' +
    "<p>Spring Hill is a census-designated place (CDP) in Hernando County, Florida, United States. The population was 98,621 at the 2010 census, up from 69,078 at the 2000 census." +
    "Source: https://en.wikipedia.org/wiki/Spring_Hill,_Florida</p >"
  "</div>" +
    "</div>";


  const info_PompanoBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pompano Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>Pompano Beach is a city in Broward County, Florida, United States, along the coast of the Atlantic Ocean, just north of Fort Lauderdale. The nearby Hillsboro Inlet forms part of the Atlantic Intracoastal Waterway. As of the 2020 census, the city's population was 112,046." +
    "Source: https://en.wikipedia.org/wiki/Pompano_Beach,_Florida</p >"
  "</div>" +
    "</div>";


  const info_WestPalmBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">West Palm Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>West Palm Beach is a city in and the county seat of Palm Beach County, Florida, United States.[6] It is located immediately to the west of the adjacent Palm Beach, which is situated on a barrier island across the Lake Worth Lagoon. The population was 117,415 at the 2020 census." +
    "Source: https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Lakeland =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Lakeland</h1>' +
    '<div id="bodyContent">' +
    "<p>Lakeland is a city in Polk County, Florida, part of the Tampa Bay Area, located along Interstate 4 east of Tampa. According to the 2020 U.S. Census Bureau release, the city had a population of 112,641." +
    "Source: https://en.wikipedia.org/wiki/Lakeland,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Riverview =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Riverview</h1>' +
    '<div id="bodyContent">' +
    "<p>Riverview is an unincorporated census-designated place in Hillsborough County, Florida, United States. It is located south of Brandon. " +
    "Source: https://en.wikipedia.org/wiki/Riverview,_Florida</p >"
  "</div>" +
    "</div>";


  const info_BocaRaton =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Boca Raton</h1>' +
    '<div id="bodyContent">' +
    "<p>Boca Raton is a city in southern Palm Beach County, Florida. It was first incorporated on August 2, 1924, as Bocaratone, and then incorporated as Boca Raton in 1925. At the 2020 census, the population was 97,422." +
    "Source: https://en.wikipedia.org/wiki/Boca_Raton,_Florida</p >"
  "</div>" +
    "</div>";


  const info_Ocala =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ocala</h1>' +
    '<div id="bodyContent">' +
    "<p>Ocala is a city in and the county seat of Marion County within the northern region of Florida, United States.[3] As of the 2020 United States Census, the city's population was 63,591, making it the 54th most populated city in Florida" +
    "Source: https://en.wikipedia.org/wiki/Ocala,_Florida</p >"
  "</div>" +
    "</div>";


  const info_DaytonaBeach =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Daytona Beach</h1>' +
    '<div id="bodyContent">' +
    "<p>Daytona Beach or simply Daytona is a city in Volusia County, Florida, United States. It lies approximately 51 miles (82.1 km) northeast of Orlando, 86 miles (138.4 km) southeast of Jacksonville, and 265 miles (426.5 km) northwest of Miami. As of the 2020 census, it had a population of 72,647." +
    "Source: https://en.wikipedia.org/wiki/Daytona_Beach,_Florida</p >"
  "</div>" +
    "</div>";


  const info_StAugustine =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">St. Augustine</h1>' +
    '<div id="bodyContent">' +
    "<p>St. Augustine is a city in the Southeastern United States, on the Atlantic coast of northeastern Florida. Founded in 1565 by Spanish explorers, it is the oldest continuously-inhabited European-established settlement in what is now the contiguous United States." +
    "Source: https://en.wikipedia.org/wiki/St._Augustine,_Florida</p >"
  "</div>" +
    "</div>";


  const info_PanamaCity =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Panama City</h1>' +
    '<div id="bodyContent">' +
    "<p>Panama City is a city in and the county seat of Bay County, Florida, United States. Located along U.S. Route 98, it is the largest city between Tallahassee and Pensacola." +
    "Source: https://en.wikipedia.org/wiki/Panama_City,_Florida</p >"
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


  //CapeCoral Info Window
  const infowindow_CapeCoral = new google.maps.InfoWindow({
    content: info_CapeCoral,
  });
  m_CapeCoral.addListener("click", () => {
    infowindow_CapeCoral.open({
      anchor: m_CapeCoral,
      map,
      shouldFocus: false,
    });
  })
  //CapeCoral Info Window


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


  //PembrokePines Info Window
  const infowindow_PembrokePines = new google.maps.InfoWindow({
    content: info_PembrokePines,
  });
  m_PembrokePines.addListener("click", () => {
    infowindow_PembrokePines.open({
      anchor: m_PembrokePines,
      map,
      shouldFocus: false,
    });
  });
  //PembrokePines Info Window


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


  //Miramar Info Window
  const infowindow_Miramar = new google.maps.InfoWindow({
    content: info_Miramar,
  });
  m_Miramar.addListener("click", () => {
    infowindow_Miramar.open({
      anchor: m_Miramar,
      map,
      shouldFocus: false,
    });
  });
  //Miramar Info Window


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


  //CoralSprings Info Window
  const infowindow_CoralSprings = new google.maps.InfoWindow({
    content: info_CoralSprings,
  });
  m_CoralSprings.addListener("click", () => {
    infowindow_CoralSprings.open({
      anchor: m_CoralSprings,
      map,
      shouldFocus: false,
    });
  });
  //CoralSprings Info Window


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
