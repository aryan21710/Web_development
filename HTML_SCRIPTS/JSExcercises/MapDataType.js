// #KEYWORDS:- [MAP DATATYPE USAGE, SORTING AN ARRAY OF OBJECTS USING MAP DATA-STRUCTURE];
function routeBind(url,method,action) {
    console.log('----------------------------------');
    route=new Map();
    key = url + ':' + method;
    value=action;
    route.set(key,value);
    console.log('SIZE OF MAP:-'+route.size);
    let iter = route.keys()
    console.log('MAP CONTAIN KEYS:-'+iter.next().value);

    iter=route.values();
    console.log('MAP CONTAIN VALUES :-'+iter.next().value());

    console.log(`route[${key}]` +' has value:-'+route.get(url + ':' + method)());
    console.log('ITERATING OVER THE MAP AS BELOW');
    route.forEach((v,k,m)=>{
        console.log('key:-'+k + ' value:-'+v());
    })
}
routeBind('/page', 'GET', function () { return 'First binding.'; });
routeBind('/page', 'GET', function () { return 'Modified binding.'; })


console.log('________________NEXT PROGRAM___________________');

makeMap=(obj)=>{
    key='title'+':'+'{'+obj['title']+'}'+':'+'platform';
    let map=new Map();
    map.set(key,obj['platform']);
    return map;

}

let gameList = [
    { "title": "LittleBigPlanet PS Vita", "platform": "PlayStation Vita", "score": 9, "genre": "Platformer", "editors_choice": "Y" },
    { "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition", "platform": "PlayStation Vita", "score": 9, "genre": "Platformer", "editors_choice": "Y" },
    { "title": "Splice: Tree of Life", "platform": "iPad", "score": 8.5, "genre": "Puzzle", "editors_choice": "N" },
    { "title": "NHL 13", "platform": "Xbox 360", "score": 8.5, "genre": "Sports", "editors_choice": "N" },
    { "title": "NHL 13", "platform": "PlayStation 3", "score": 8.5, "genre": "Sports", "editors_choice": "N" }]

console.log('ACTUAL GAMELIST:-');
gameList.forEach((v) => console.log(v))

let mymap=[];
gameList.forEach(v=>mymap.push(makeMap(v)));

mymap.sort(function (a, b) {  
    iter=a.keys();
    k=iter.next().value;
    iter = b.keys();
    l = iter.next().value;
    let compare = a.get(k).toLowerCase() > b.get(l).toLowerCase() ? 1 : -1
    return compare;
})

console.log('\n\nSORTED GAMELIST BASED ON PLATFORM:-');
mymap.forEach((v)=> console.log(v))

console.log('________________NEXT PROGRAM___________________');

// #KEYWORD:- [converting an array of objects into map];

let data=[{'name':'aryan','age':39},{'name':'sim','age':28},{'name':'ryan','age':8}];
console.log('ACTUAL DATA IN ARRAY FORMAT:-'+JSON.stringify(data));

let map = new Map();
const mapArr=data.map((m)=>{
    key = 'name'+':'+m['name'] + ':' + 'age';
    map.set(key,m['age']);
    return map;
},{})

console.log('THE CONVERTED ARRAY INTO MAP:-')
for (let [key,value] of map) {
    console.log(key +'::'+value);
}

mapArr.sort((a,b)=>{
    let compare=0;
    iter = a.keys();
    k = iter.next().value;
    iter = b.keys();
    l = iter.next().value;
    if (a.get(k) < a.get(l)) {
        compare = -1
    } else {
        compare = 1
    }
    return compare
})

console.log('\n\nSORTING IN ASCENDING ORDER THE MAP/ARRAY OF OBJECTS BASED ON AGE');

mapArr.forEach((v)=>console.log(v));
