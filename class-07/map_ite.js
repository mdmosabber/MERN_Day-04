var myMaps = new Map([
    ['key1', 'Bangladesh'],
    ['key2', 'India'],
    ['3333', 'Nepal'],
    ['key4', 'Pakistan']
])


for(let myMap of myMaps.values()){
    console.log(myMap);
}

for(let myKey of myMaps.keys()){ 
    console.log(myKey);
}