import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/thunk/registerUser';
import Button from '../custom/Button';



const Register = () => { 
    const dispatch = useDispatch();
    const useError = useSelector(state => state.userReducer.error);
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const {name, email, password} = value;
     
    
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(registerUser(name, email, password))
        } 
    return (
      
      <div>
        {useError && <span>{useError}</span>}
       <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input" onChange={(e) => handleChange(e)} value={name} type="text" name="name" id="name"/>
        <input className="input" onChange={(e) => handleChange(e)} value={email} type="text" name="email" id="email"/>
        <input className="input" onChange={(e) => handleChange(e)} value={password} type="password" name="password" id="password"/>
        <Button type="submit" >
            Submit
        </Button>
        </form>
        </div>
    )
}

export default Register
