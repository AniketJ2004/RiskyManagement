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
