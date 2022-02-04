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
import Axios from "axios"
import axios from "axios";



const App = () => {
  const [role, setRole] = useState(false)
  const [user, setUser] = useState("")


//   useEffect(()=>{
//     fetch(`http://localhost:2020/login`)
//     .then((response) => {
//     response.json()
//     .then(json =>{
//         console.log(json);
//         if(json.logged === true){
          
//         setRole(true)
//         setUser(json.foundUser.email)
          
// }
// })
// })
// console.log("test");
// })
const login = () => {
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
axios.post("http://localhost:2020/login",{
  email: inputEmail.value,
  password: inputPassword.value,
  
}).then(response => {console.log(response.data)

  if(response.data.logged){
    setRole(true)
  }
})
  
 }
const register = () => {

const inputUsername = document.getElementById("registerUsername")
const inputEmail = document.getElementById("registerEmail")
const inputPassword = document.getElementById("registerPassword")
axios.post("http://localhost:2020/register",{
  username: inputUsername.value,
  email: inputEmail.value,
  password: inputPassword.value,
  
}).then(response => {console.log(response)

  if(response.data.logged){
    setRole(true)
  }
})
 
 }



function logOut(){
  setRole(false)
  console.log(role);
}

console.log(role);

  return (   <section >
  

  {role == true ? (   
 
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
   <Login loginFunction={login} registerFunction={register}/>
   </div>
  
   )}
 



</section >  );
}
 
export default App;


