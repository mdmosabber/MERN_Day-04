var mySets = new Set();

mySets.add('Bangladesh');
mySets.add('India');
mySets.add('Nepal');
mySets.add('Pakistan');
mySets.add('China');
mySets.add('Pakistan');

console.log(mySets.has('India'));

console.log(mySets.values());

console.log(mySets.size);

for(let mySet of mySets){
    console.log(mySet)
}
