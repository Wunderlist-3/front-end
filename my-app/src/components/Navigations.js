import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//styled components
const Nav = styled.div`
    margin: 3%;

`
const Button = styled.span`
    border: 1px solid white;
    margin: 1%;
    padding: 1%;
    border-radius: 15%; 
    background: #36454F;
    color: #e3dac9;   
`

const Navigation = () => {
    // console.log('navigation running')
    return (
        <Nav>
            <h2>Wunderlist 2.0</h2>
            <Button>
                <Link to='/' style={{ textDecoration: 'none', color: '#e3dac9' }}>Home</Link>
            </Button>
            <Button>
                <Link to='/login' style={{ textDecoration: 'none', color: '#e3dac9' }}>Login</Link>
            </Button>
            <Button>
                <Link to='/register' style={{ textDecoration: 'none', color: '#e3dac9' }}>Register</Link>
            </Button>
        </Nav>
    )
}
export default Navigation;