var myMaps = new Map();
myMaps.set('key1','Bangladesh');
myMaps.set('key2','India');
myMaps.set('key3','Nepal');
myMaps.set('key4','Pakistan');
myMaps.set('key5', 'China');
myMaps.set('key6','Japan');

console.log( myMaps.get('key2') );

myMaps.delete('key2');

console.log(myMaps.has('key2'));

console.log(myMaps.size);

myMaps.clear();

for(let myMap of myMaps.values()){
    console.log(myMap);
}