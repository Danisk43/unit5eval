import React from 'react'

const Login = () => {

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

  return (
    <div>
<input type="username"name="username" placeholder="Username" value={username}  onChange={handleChange}/>

<input type="password"name="password" placeholder="password" value={password} onChange={handleChange}/>
        <button>SUBMIT</button>
    </div>
  )
}

export default Login