import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    let isLoggedIn=localStorage.getItem("user")
     if(isLoggedIn){
      navigate("/")
     }
  },[])


  const getData = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
     await localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    //login page
    <div className="login">
      <h1>Login</h1>
      {/* <input  className='inputbox' type="text" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/><br /> */}
      <input
        value={email}
        className="inputbox"
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        value={password}
        className="inputbox"
        type="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={getData}>Login</button>
    </div>
  );
};

export default Login;
