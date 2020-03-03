import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export const Register = () => {

    const [register, setRegister] = useState({name:'', username:'', password:''});

    const handleChanges = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegister({name:'',username:'', password:''});
        console.log('Name:', register.name,'Username:', register.username, 'Password:', register.password)

        axios
            .post('https://reqres.in/api/register', register)
            .then(res => {
                console.log(res.data, 'register worked');
            })
            .catch(err => {
                console.log(err.data, 'register failed');
            });
    };

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor='name'>Name: </label>
                <input 
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={register.name}
                    required
                />
                <br/>
                <label htmlFor='username'>Username: </label>
                <input 
                    id='username'
                    type='username'
                    name='username'
                    onChange={handleChanges}
                    value={register.username}
                    required
                />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={register.password}
                    required
                />
                <br/>
                <Link to='/todo' style={{ textDecoration: 'none', color: '#e3dac9' }}><button type='submit'>Register</button></Link>
                {/* <button>Register</button> */}
            </form>
        </div>
    )
}

export default Register;