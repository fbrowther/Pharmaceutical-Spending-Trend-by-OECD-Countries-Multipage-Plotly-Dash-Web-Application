// Create a map object.
var myMap = L.map("heatmap", {
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
        name: "Australia",
        location: [-25.274398, 133.775136],
        Spend_M: 210562.01
    },
    {
        name: "Austria",
        location: [47.516231, 14.550072],
        Spend_M: 82723.22
    },
    {
        name: "Belgium",
        location: [50.503887, 4.469936],
        Spend_M: 126330.37
    },
    {
        name: "Canada",
        location: [45.41666667,-75.7],
        Spend_M: 445157.79
    },
    {
        name: "Switzerland",
        location: [46.818188, 8.227512],
        Spend_M: 103005.12
    },
    {
        name: "Czech Republic",
        location: [50.08333333,14.466667],
        Spend_M: 78489.23
    },
    {
        name: "Germany",
        location: [51.165691, 10.451526],
        Spend_M: 1188168.49
    },
    {
        name: "Denmark",
        location: [56.26392, 9.501785],
        Spend_M: 38568.93
    },
    {
        name: "Spain ",
        location: [40.4,-3.683333],
        Spend_M: 436073.35
    },
    {
        name: "Estonia",
        location: [59.43333333,24.716667],
        Spend_M: 5179.24
    },
    {
        name: "Finland",
        location: [61.92411, 25.748151],
        Spend_M: 52228.15
    },
    {
        name: "France",
        location: [48.86666667,2.333333],
        Spend_M: 802298.94
    },
    {
        name: "Great Britain",
        location: [51.5,-0.083333],
        Spend_M: 243390.12
    },
    {
        name: "Greece",
        location: [37.98333333,23.733333],
        Spend_M: 113206.42
    },
    {
        name: "Hungary",
        location: [47.5,19.083333],
        Spend_M: 81580.59
    },
    {
        name: "Ireland",
        location: [53.41291, -8.24389],
        Spend_M: 46876.19
    },
    {
        name: "Iceland",
        location: [64.963051, -19.020835],
        Spend_M: 3752.89
    },
    {
        name: "Israel",
        location: [31.046051, 34.851612],
        Spend_M: 16654.40
    },
    {
        name: "Italy",
        location: [41.9,12.483333],
        Spend_M: 754377.19
    },
    {
        name: "Japan",
        location: [35.68333333,139.75],
        Spend_M: 1602492.93
    },
    {
        name: "Korea",
        location: [37.55,126.983333],
        Spend_M: 413876.98
    },
    {
        name: "Lithuania",
        location: [54.68333333,25.316667],
        Spend_M: 13859.94
    },
    {
      name: "Luxembourg",
      location: [49.815273, 6.129583],
      Spend_M: 4858.94
    },
    {
        name: "Latvia",
        location: [56.95,24.1],
        Spend_M: 6829.89
    },
    {
        name: "Mexico",
        location: [19.43333333,-99.133333],
        Spend_M: 451903.24
    },
    {
        name: "Netherlands",
        location: [52.132633, 5.291266],
        Spend_M: 147102.32
    },
    {
        name: "Norway",
        location: [60.472024, 8.468946],
        Spend_M: 44315.79
    },
    {
        name: "New Zealand",
        location: [-41.3,174.783333],
        Spend_M: 11907.15
    },
    {
        name: "Poland",
        location: [52.25,21],
        Spend_M: 155643.45
    },
    {
        name: "Portugal",
        location: [38.71666667,-9.133333],
        Spend_M: 106881.27
    },
    {
        name: "Russia",
        location: [55.751244,37.618423],
        Spend_M: 44655.62
    },
    {
        name: "Slovakia",
        location: [48.15,17.116667],
        Spend_M: 38472.30
    },
    {
        name: "Slovenia",
        location: [46.05,14.516667],
        Spend_M: 12694.20
    },
    {
        name: "Sweden",
        location: [60.128161, 18.643501],
        Spend_M: 93430.58
    },
    {
        name: "Turkey",
        location: [39.93333333,32.866667],
        Spend_M: 25138.33
    },
    {
      name: "United States",
      location: [37.09024, -95.712891],
      Spend_M: 4186292.78
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