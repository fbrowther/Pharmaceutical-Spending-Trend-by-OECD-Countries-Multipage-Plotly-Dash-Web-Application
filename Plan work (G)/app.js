
// heatmap

var myMap = L.map("heatmap", {
    center: [37.7749, -122.4194],
    zoom: 13
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var data = "./data_csv.csv";
  
  d3.json(url).then(function(response) {
  
    console.log(response);
  
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].location;
  
      if (location) {
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });
  