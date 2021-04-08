import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { logIn } from '../../redux/thunk/logIn';
import Button from '../custom/Button';
const Login = () => {
    const dispatch = useDispatch(); 
    const state = useSelector(state => state);   
    const [value, setValue] = useState({
        email: "",
        password: ""
    }) 
    const {email, password} = value;
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setValue({
            email: '',
            password: ''
        }) 
        dispatch(logIn(email, password)) 
        } 

    return (
        <> 
       <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input" placeholder="Email" onChange={(e) => handleChange(e)} value={email} type="text" name="email" id="email"/>
        <input className="input" placeholder="Password" onChange={(e) => handleChange(e)} value={password} type="password" name="password" id="password"/>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
        </Button>
        </form>
        </>
    )
}

export default Login
