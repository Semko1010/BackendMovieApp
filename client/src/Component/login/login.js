

const Login = (props) => {
    return (
    <div>
      
    
        <h2>Login</h2>
        <div className="login">
        <input type="email" placeholder="Email" name="email" id="email"/>  
        <input type="text" placeholder="Passwort" name="password" id="password"/>  
        <button onClick={props.loginFunction}>Login</button>
        </div>
 
    
    
<h2>Registrieren</h2>
<div className="login">
    <input type="text" placeholder="Username" name="username" id="registerUsername"/>  
    <input type="email" placeholder="Email" name="email" id="registerEmail"/>  
    <input type="text" placeholder="Passwort" name="password" id="registerPassword"/>   
    <button onClick={props.registerFunction}>Register</button>
    </div>
    
    </div>  
   
    
    );
}
 
export default Login;