import { useEffect,useState } from 'react'
import Home from './Home'



const HomeFetch = () => {
    // const [role, setRole] = useState("")
    const [data, setData] = useState([])

useEffect(()=>{
//     fetch(`http://localhost:2020/login`)
//     .then((response) => {
//     response.json()
//     .then(json =>{
//         setRole(json.foundUser.role)
//         if(json.logged === true){
        
        
        
            
        
// }
//     })
// })
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=14a38df4244c367a387400bb64bbcc05&language=de`)
.then(response => response.json())
.then (json => {setData(json.results )})       

},[])


// console.log(role);
function left (){
               document.querySelector(".sectionGrid").scrollLeft-=500
            }
            function right(){
                document.querySelector(".sectionGrid").scrollLeft+=500
             }


    return (
       
        
        
    <div className="h2Section">
        
        {/* {role == "user" &&(  <h1 style={{color: "green"}}>Logged</h1>  )}       */}
           
    <h2>Beliebteste Filme</h2>
   
    <div className="sectionGrid">
    
        <img style={{boxShadow: "none"}} onClick={left} className="btnLeft" src="./SVG/left.svg" alt="" />
       
    {data.map(e =>
        <Home
        key={e.id}
        id={e.id}
        title={e.title}
        img={e.poster_path}
        voting={e.vote_average}
        release_date={e.release_date}
        />
       

        )}
        
    <img style={{boxShadow: "none"}} onClick={right} className="btnRight" src="./SVG/right.svg" alt="" />
       
    </div>
     
    </div> );
}
 
export default HomeFetch;

