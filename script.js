// Create map
var map = L.map('map').setView([15,100],5);

// Colorful base map with English labels
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
 attribution: '&copy; OpenStreetMap & CartoDB',
 subdomains: 'abcd',
 maxZoom: 19
}).addTo(map);


// Colored region example (Thailand area)

var region = L.polygon([
 [20,98],
 [19,101],
 [17,102],
 [14,101],
 [13,99],
 [15,98]
],{
 color:"#006400",
 weight:2,
 fillColor:"#00FF00",
 fillOpacity:0.6
}).addTo(map);

region.bindPopup("Jurisdiction Risk Data");


// GDP Chart

var ctx = document.getElementById('gdpChart');

new Chart(ctx,{
 type:'line',
 data:{
  labels:["2021","2022","2023","2024","2025"],
  datasets:[
   {
    label:"Singapore",
    data:[10,12,9,11,15]
   },
   {
    label:"Thailand",
    data:[8,9,7,8,12]
   }
  ]
 }
});


// Population Chart

var ctx2 = document.getElementById('populationChart');

new Chart(ctx2,{
 type:'line',
 data:{
  labels:["2021","2022","2023","2024","2025"],
  datasets:[
   {
    label:"Singapore",
    data:[5,4,3,4,3]
   },
   {
    label:"Thailand",
    data:[12,12,10,11,9]
   }
  ]
 }
});

