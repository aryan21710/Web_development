//KEYWORD:- [IMPORTING JAVASCRIPT CLASS FROM DIFFERENT FILE AS A MODULE, passing object literal to an object.]
import {movieClass} from "./movieClass.js"
import {movieList} from "./movieList_obj.js"


//  const movieList=[
//     {
//     completed: false,
//     title: 'GO TO GYM AT 8pm'
//     },
//     {
//         completed: true,
//     title: 'DRINK PROTEIN AT 9.30pm'
//     },
//     {
//         completed : false,
//     title: 'EAT DINNER AT 10pm'
//     },
//     {
//         completed : true,
//     title: 'SLEEP AT 11PM'
//     },
//     {
//         completed : true,
//     title: 'TAKE HER TO MOVIE'
//     },
//     {
//         completed : true,
//     title: 'TAKE NOC FROM LAWYERS'
//     },
//     {
//         completed : true,
//     title: 'SIM TO SHOPPING'
//     }
// ]

const movieObj=new movieClass(movieList);
movieObj.addmovieToDom(movieList);
movieObj.filtermovie()


