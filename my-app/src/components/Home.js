import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//styled components
const HomeStyle = styled.section`
    margin: 1%;
    padding: 2%;
    border: 1px dashed white;
`
const Words = styled.p`
    border: 1px dashed white;
    padding: 3%;
    margin: 3%;
    background: #36454F;
    color: #e3dac9;
`
const Button = styled.span`
    border: 1px solid white;
    margin: 1%;
    padding: 1%;
    border-radius: 15%; 
    background: #36454F;
    color: #e3dac9;   
`

const Home = () => {
    return(
        <HomeStyle>
            <h1>Welcome to Wunderlist 2.0</h1>
            <h3>The newest To-Do App</h3>
            <Words>Pinterest woke cillum, truffaut fam stumptown fanny pack. Art party everyday carry edison bulb officia. Incididunt eu VHS ut selvage. Bespoke literally lo-fi actually aesthetic pop-up single-origin coffee yuccie. Raclette hammock aliquip, et 3 wolf moon mumblecore snackwave banjo. Tempor farm-to-table yuccie fanny pack proident. Anim church-key eu af, vice nostrud aliquip next level quinoa.</Words>
            <Words>Aliquip hella butcher minim ut duis celiac et single-origin coffee. Vape pour-over hexagon, edison bulb officia hell of laborum roof party readymade ut drinking vinegar veniam vexillologist flannel magna. Raw denim austin flexitarian lo-fi sartorial mlkshk vexillologist tousled organic officia craft beer kombucha voluptate post-ironic. Pinterest truffaut seitan, woke schlitz pariatur hell of vape echo park. Normcore dolore freegan, plaid street art offal butcher.</Words>
            <Button>
                <Link to='/login' style={{ textDecoration: 'none', color: '#e3dac9', }}>Login</Link>
            </Button>
            <Button>
                <Link to='/register' style={{ textDecoration: 'none', color: '#e3dac9' }}>Sign Up</Link>
            </Button>
        </HomeStyle>
    )
}

export default Home;