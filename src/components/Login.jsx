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
          .then((res) => (console.log(res)))
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