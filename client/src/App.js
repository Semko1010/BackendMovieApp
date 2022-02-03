import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} 
from "react-router-dom";
import React, { Component } from 'react'
import HomeFetch from "./Component/Home/HomeFetch"
import HomeRatedFetch from "./Component/HomeRated/HomeRatedFetch"
import Header from "./Component/Header/Header"
import DetailId from "./Component/Deatail/DetailId"
import Search from "./Component/Search/SearchFetch"
import Button from "./Component/Button/Button"
import HomeUpcommingFetch from "./Component/HomeUpcoming/HomeUpcommingFetch"
import Login from "./Component/login/login"
import './App.css';
import { useEffect,useState } from 'react'




const App = () => {
  const [role, setRole] = useState("")
  const [user, setUser] = useState("")


  useEffect(()=>{
    fetch(`http://localhost:2020/login`)
    .then((response) => {
    response.json()
    .then(json =>{
        console.log(json);
        if(json.logged === true){
          
        setRole(json.foundUser.role)
        setUser(json.foundUser.email)
          
}
})
})
},[])

function logOut(){
  setRole("not user")
  console.log(role);
}

console.log(role);

  return (   <section >
  

  {role == "user" ? (   
 
  <Router>
      <h1 style={{color: "green"}}>Logged as {user}</h1>
      <button onClick={logOut }>Log Out </button>
  <Header/>
  
<Routes>

 
<Route  path="/" element={[<Button/>,<HomeFetch/>,<HomeRatedFetch/>,<HomeUpcommingFetch/>]}/>  
<Route path="/details/:id" element={<DetailId/>}/> 
<Route path="/search" element={<Search/>}/> 
<Route path="/login"  element={<Login/>}/> 


</Routes>

</Router>
 ) : (
  
   <div>
     <h1 style={{color: "red"}}>Not Logged</h1>
   <h2>Bitte einloggen oder Registrieren</h2>
   <Login/>
   </div>
  
   )}
 



</section >  );
}
 
export default App;


