const actor= {
    name : 'srk',
    genre : 'romantic',
    age : 55,
    movies: ['ddlj','k3g','khnk','kkhh']

}

// const printMovies=(()=>{
//     if(actor.movies.length>0) {
//         const movieList=[];
//         actor.movies.map((movie)=>{
//             return <li key={movie}>{movie}</li>;
//         })
//     }
// })


const appRoot=document.getElementById('app');
const renderHTML=()=> {
    const template=(
        <div>
            <h1 style={{color:"red"}}>ACTOR:- {actor.name}</h1>   
            <p style={{color:"grey"}}>GENRE OF MOVIES:-  {actor.genre}</p>
            <p style={{color:"grey"}}>AGE:- {actor.age}</p>
            {/* ARRAY OF JSX */}
            {[<span> ADDRESS:- </span>, <span> Mannat Bandra </span>,<span> Mumbai</span>]}
            <ol>
            {
                /* #KEYWORD:- [SHORTHAND OPERATION FOR ARROW FUNCTION, array map]*/
            actor.movies.map((movie)=> <li key={movie}>{movie}</li>)  
            }
            </ol>
        </div>
    )
    ReactDOM.render(template,appRoot)
}

renderHTML();
