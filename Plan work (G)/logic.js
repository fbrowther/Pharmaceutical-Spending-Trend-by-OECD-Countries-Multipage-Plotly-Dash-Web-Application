// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

  // Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
// "../Plotly Dash Multipage - Farjana/Resources/data/data_csv.csv"
var countries = [
    {
      name: "Luxembourg",
      location: [49.815273, 6.129583],
      Spend_M: 116014.6025
    },
    {
      name: "Bermuda",
      location: [32.321384, -64.75737],
      Spend_M: 107079.4798
    },
    {
      name: "Switzerland",
      location: [46.818188, 8.227512],
      Spend_M: 87097.03645
    },
    {
      name: "Ireland",
      location: [53.41291, -8.24389],
      Spend_M: 85267.76474
    },
    {
      name: "Cayman Islands",
      location: [19.513469, -80.566956],
      Spend_M: 
    },
    {
      name: "Norway",
      location: [60.472024, 8.468946],
      Spend_M: 
    },
    {
      name: "United States",
      location: [37.09024, -95.712891],
      Spend_M: 
    },
    {
      name: "Denmark",
      location: [56.26392, 9.501785],
      Spend_M: 
    },
    {
      name: "Singapore",
      location: [1.352083, 103.819836],
      Spend_M: 
    },
    {
      name: "Iceland",
      location: [64.963051, -19.020835],
      Spend_M: 
    },
    {
      name: "Netherlands",
      location: [52.132633, 5.291266],
      Spend_M: 
    },
    {
      name: "Sweden",
      location: [60.128161, 18.643501],
      Spend_M: 
    },
    {
      name: "Australia",
      location: [-25.274398, 133.775136],
      Spend_M: 
    },
    {
      name: "Qatar",
      location: [25.354826, 51.183884],
      Spend_M: 
    },
    {
      name: "Finland",
      location: [61.92411, 25.748151],
      Spend_M: 
    },
    {
      name: "Austria",
      location: [47.516231, 14.550072],
      Spend_M: 
    },
    {
      name: "Hong Kong",
      location: [22.396428, 114.109497],
      Spend_M: 
    },
    {
      name: "Germany",
      location: [51.165691, 10.451526],
      Spend_M: 
    },
    {
      name: "Germany",
      location: [51.165691, 10.451526],
      Spend_M: 
    },
    {
      name: "Belgium",
      location: [50.503887, 4.469936],
      Spend_M: 
    },
    {
      name: "Israel",
      location: [31.046051, 34.851612],
      Spend_M: 
    }
  ];

  // Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < countries.length; i++) {

    // Conditionals for country gdp_pc
    var color = "";
    if (countries[i].Spend_M > 100000) {
      color = "yellow";
    }
    else if (countries[i].Spend_M > 75000) {
      color = "blue";
    }
    else if (countries[i].Spend_M > 50000) {
      color = "green";
    }
    else {
      color = "violet";
    }

     // Add circles to the map.
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].Spend_M) * 500
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].Spend_M}</h3>`).addTo(myMap);
}


// AUS    44
// AUT    26
// BEL    41
// CAN    45
// CHE    31
// CZE    26
// DEU    45
// DNK    36
// ESP    32
// EST    17
// FIN    46
// FRA    30
// GBR    31
// GRC    27
// HUN    22
// IRL    41
// ISL    46
// ISR     8
// ITA    29
// JPN    32
// KOR    47
// LTU    12
// LUX    21
// LVA    12
// MEX    17
// NLD    43
// NOR    47
// NZL    24
// POL    14
// PRT    39
// RUS     1
// SVK    17
// SVN    14
// SWE    46
// TUR    11
// USA    16