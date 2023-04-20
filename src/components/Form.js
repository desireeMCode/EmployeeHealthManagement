import React, {useState} from "react";
import Axios from 'axios';
import "../styles/form.css";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login =  (e)=>{
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) =>{
      if(response.data.message){
        console.log(response.data.message)
        setLoginStatus(response.data.messagse)
      }
      else{
        setLoginStatus()
      }
    })
}

  return (
    <div>
      <form onSubmit={login}>
        <fieldset>
          <input
            type="text" name="username" id="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"required
          />
        </fieldset>
        <fieldset>
          <input
            type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" required
          />
        </fieldset>
        <input type="submit" className="bttn" />
        <p className='login-status'>{loginStatus}</p>
      </form>
    </div>
  );
}

export default Form