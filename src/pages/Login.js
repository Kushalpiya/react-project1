
import React, { useState } from 'react'



let Login = (props)=> {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  
  const data = require('../credentials.json');

  
    return <>
       <div className='login container'>
            <h1 className='login-header'>Good to see you again</h1>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob1'>
                <path fill="#FF0066" d="M54.3,-21C58.8,-3.9,42.8,16.6,26.5,26C10.1,35.4,-6.7,33.8,-21.6,24.2C-36.5,14.7,-49.6,-2.9,-45.7,-19.2C-41.8,-35.5,-20.9,-50.5,2,-51.2C24.9,-51.8,49.9,-38.1,54.3,-21Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob2'>
                <path fill="#FF0066" d="M42.7,-68.7C47.6,-55.2,38.5,-32.4,38.7,-16.2C39,-0.1,48.5,9.4,52,22.5C55.4,35.6,52.8,52.3,43.1,63.8C33.4,75.2,16.7,81.4,0,81.4C-16.7,81.4,-33.5,75.2,-43.9,64C-54.3,52.8,-58.3,36.5,-63.2,20.7C-68,4.9,-73.7,-10.4,-70,-23C-66.3,-35.6,-53.2,-45.4,-40,-56.2C-26.7,-67.1,-13.4,-78.9,2.8,-82.7C18.9,-86.5,37.8,-82.3,42.7,-68.7Z" transform="translate(100 100)" />
            </svg>
            <div className='login-form mt-5'>
            <form onSubmit={(e) => {
              e.preventDefault();
              // const isFound =data.some(credentials=>{
              //   if(credentials.email===email && credentials.password===password){
              //     return true
              //   }
              //   else{
              //   return false
              //   } 
              // })
              const isFound=true
              if(isFound){
                props.changePage('home')
              }
              else{
              alert('Please Register')
              }
            }}> 
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your Email</label>
                    <input type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    } } className="form-control mt-2" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Your Password</label>
                    <input type="password" value={password} onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    
                    className="form-control mt-2" id="inputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mt-4 login-submit fw-3">Sign In</button>
            </form>
            </div>
        </div>
    </>
     
}

export default  Login;