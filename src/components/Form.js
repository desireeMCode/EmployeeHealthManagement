import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/form.css";

function Form() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
    .then(res => console.log(res))
    
    .catch(err => console.log(err))

    toast.success("Logged In Succesfully")
        setTimeout(() =>{
          navigate("/viewinsurances", 200)
        })

    }

  return (
    <div>
      <form onSubmit={login}>
        <fieldset>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          />
        </fieldset>
        <button type="submit" className="bttn" onClick={login} >Log In</button>
        <p className="login-status">{loginStatus}</p>
      </form>
    </div>
  );
          };
export default Form;