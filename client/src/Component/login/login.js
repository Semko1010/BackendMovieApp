import {Link} from "react-router-dom"

const Login = () => {
    return (
    <div>
      
    <form action="http://localhost:2020/login" method="post">
        <h2>Login</h2>
        <div className="login">
        <input type="email" placeholder="Email" name="email"/>  
        <input type="text" placeholder="Passwort" name="password"/>  
        <button type="submit">Login</button>
        </div>
    </form>  
    
    <form action="http://localhost:2020/register" method="post">
<h2>Registrieren</h2>
<div className="login">
    <input type="text" placeholder="Username" name="username"/>  
    <input type="email" placeholder="Email" name="email" id="email"/>  
    <input type="text" placeholder="Passwort" name="password"/>  
    <button type="submit">Register</button>
    </div>
    </form>
    </div>  
   
    
    );
}
 
export default Login;