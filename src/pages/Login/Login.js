import { Link } from "react-router-dom";
import "./Login.css";
// import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";


function Login() {


   const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  

   function handleUsernameChange(e){
 setUsername(e.target.value);
 console.log(username);
   }

     function handlePasswordChange(e){
 setPassword(e.target.value);
 console.log(password);
   }

   function handleLogin (e){
    e.preventDefault();
    fetch('https://dummyjson.com/auth/login' ,{
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body:JSON.stringify({
        username : username,
        password : password
      })
    })
    .then(res =>res.json())
    .then(console.log)

   }
    return (
        <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <div>
          {/* <label>Username</label> */}
          <input type="text" className="input" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          {/* <label>Password</label> */}
          <input type="password" className="input" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        </div>
        <Link to={'/Home'} >
        <button type="submit">Login </button>
        </Link>
        {/* <span style={{color: "red", fontSize: "15px"}}>{error}</span> */}
      </form>
      <div className="forgot-password">
        {/* <a href="#">Forgot your password?</a> */}
      </div>
    </div>
    )
}

export default Login
