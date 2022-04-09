import React from 'react'

const CreateEmployee = () => {

    const init = {
        "name": "",
        "email": "",
        "password": "",
        "username": "",
        "mobile": "",
        "description": ""
    }

    const [first, setFirst] = React.useState(init)

    const { name, email, password, username, mobile, description } = first
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFirst({ ...first, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let pl = JSON.stringify(first)
        fetch("https://masai-api-mocker.herokuapp.com/auth/register",
            {
                method: "POST",
                body: pl,
                headers: { "Content-Type": "application/json" }
            })
            .then((res) => (res.json()))
            .then((res) => (console.log(res)))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="NAME" value={name} onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="EMAIL" value={email} onChange={handleChange} /><br />
                <input type="text" name="password" placeholder="PASSWORD" value={password} onChange={handleChange} /><br />
                <br />
                <input type="text" name="username" placeholder="USERNAME" value={username} onChange={handleChange} /><br />
                <br />

                <input type="number" name="mobile" value={mobile} onChange={handleChange} />
                <br />
                <input type="text" name="description" value={description} placeholder="DESCRIPTION" onChange={handleChange} /><br />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default CreateEmployee