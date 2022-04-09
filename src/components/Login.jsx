import React from 'react'

const Login = () => {

    const [input,setInput]=React.useState([])

    const init1={
        "password": "",
        "username": ""
      }

      const handleChange=({password,username})=>{
     
            setInput({...input,[name]:value})
    }

  return (
    <div>
<input type="username"name="username" value={username} />

<input type="password"name="password" value={password}/>
        
    </div>
  )
}

export default Login