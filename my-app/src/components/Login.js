import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

//styled components
const LoginStyle = styled.section`
    margin: 1%;
    padding: 2%;
    border: 1px dashed white;
`
// const Form = styled.p`
//     border: 1px dashed white;
//     padding: 3%;
//     margin: 3%;
//     background: #36454F;
//     color: #e3dac9;
// `
// const Field = styled.span`
//     margin: 1%;
// `
// const Button = styled.span`
//     border: 1px solid white;
//     margin: 3%;
//     padding: 0.5%;
//     border-radius: 15%; 
//     background: #36454F;
//     color: #e3dac9;   
// `

const Login = () => {

    const [login, setLogin] = useState({username:'', password:''});

    const handleChanges = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin({username:'', password:''});
        console.log('Username:', login.username, 'Password:', login.password)

        axios
            .post('https://reqres.in/api/login', login)
            .then(res=>{
                console.log(res, 'login worked')
            })
            .catch(err=>{
                console.log(err, 'login failed')
            })
    };

    return(
        <LoginStyle>
            <h1>Login</h1>
            
            <form onSubmit={event => handleSubmit(event)}>
                <label htmlFor='username'>Username: </label>
                <input 
                    id='username'
                    type='username'
                    name='username'
                    onChange={handleChanges}
                    value={login.username}
                    required
                />

                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={login.password}
                    required
                />

                <br/>

                <Link to='/todo' style={{ textDecoration: 'none', color: '#e3dac9' }}><button type='submit'>Login</button></Link> 
                {/* <button type='submit'>Login</button> */}
            </form>
        </LoginStyle>
    )
}

export default Login;