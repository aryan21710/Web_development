// KEYWORD:- [sorting array of objects and its explanation];
let gameList = [
    { "title": "LittleBigPlanet PS Vita", "platform": "PlayStation Vita", "score": 9, "genre": "Platformer", "editors_choice": "Y" }, 
    { "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition", "platform": "PlayStation Vita", "score": 9, "genre": "Platformer", "editors_choice": "Y" }, 
    { "title": "Splice: Tree of Life", "platform": "iPad", "score": 8.5, "genre": "Puzzle", "editors_choice": "N" },
     { "title": "NHL 13", "platform": "Xbox 360", "score": 8.5, "genre": "Sports", "editors_choice": "N" },
     { "title": "NHL 13", "platform": "PlayStation 3", "score": 8.5, "genre": "Sports", "editors_choice": "N" }]

// IF comparison -1 --> a comes before b
// IF comparison 1 --> b comes before a
// IF comparison 0 --> a and b are left unchanged;

compare=(a,b)=>{
    let comparison=0;
    console.log('COMPARING ' + a['platform'].toLowerCase() + ' AND ' + b['platform'].toLowerCase());
    if (a['platform'].toLowerCase() > b['platform'].toLowerCase()) {
        comparison =1
    } else if (a['platform'].toLowerCase() < b['platform'].toLowerCase()){
        comparison = -1
    }
    console.log(comparison);
    return comparison;
}

gameList.sort(compare)

console.log(gameList);



