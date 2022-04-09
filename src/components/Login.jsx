import React from 'react'
import { useDispatch } from 'react-redux'
import {userdata,loginAction} from "../redux/action"
 

const Login = () => {

  const dispatch=useDispatch();

    const [input,setInput]=React.useState([])

    const init1={
        "password": "",
        "username": ""
      }
const {username,password}=input
      const handleChange=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
     
            setInput({...input,[name]:value})
    }
const  inp=JSON.stringify(input)
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch("https://masai-api-mocker.herokuapp.com/auth/login",
      {
        method: "POST",
        body: inp,
        headers: { "Content-Type": "application/json" }
    })
      
         
          .then((res) => (res.json()))
          .then((res) =>{ dispatch(userdata(input));
          dispatch(loginAction(true))
          })
          
        }


  return (
    <div>
<input type="username"name="username" placeholder="Username" value={username}  onChange={handleChange}/>

<input type="password"name="password" placeholder="password" value={password} onChange={handleChange}/>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Login