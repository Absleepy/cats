import React, {useState} from 'react';
import Button from '../custom/Button';
const Login = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
         console.log(e)
    }

    const {email, password} = value;
    return (
       <form>
        <input className="input" onChange={(e) => handleChange(e)} value={email} type="text" name="email" id="email"/>
        <input className="input" onChange={(e) => handleChange(e)} value={password} type="password" name="password" id="password"/>
        <Button onClick={(e) => handleSubmit(e)}>
            Submit
        </Button>
        </form>
    )
}

export default Login
