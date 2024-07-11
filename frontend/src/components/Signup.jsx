import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
 
  const[name,setName]=useState('')
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  const navigate=useNavigate()

  useEffect(()=>{
    let isLoggedIn=localStorage.getItem("user")
     if(isLoggedIn){
      navigate("/")
     }
  },[])


  const showData=async()=>{
   console.log(name,password,email);
   let result= await fetch("http://localhost:3000/register",{
    method:"post",
    mode:"cors",
    body:JSON.stringify({name,password,email}),
    headers:{
      "Content-Type":"application/json"
    }
  })
  result=await result.json()
  console.log(result)
  navigate("/login")
  }

  //registration page
  return (
    <div className='reg-form'>
      <h1>Register</h1>
      <input value={name} className='inputbox' type="text" placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/><br />
      <input value={email} className='inputbox' type="text" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/><br />
      <input value={password} className='inputbox' type="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/><br />
      <button onClick={showData}>Signup</button>
    </div>
  )
}

export default Signup
