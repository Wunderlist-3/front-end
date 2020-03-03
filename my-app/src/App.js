import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

//components
import Navigation from './components/Navigations';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ToDoList from './components/ToDoList';

//styled components
const AppStyle = styled.div`
  margin: 2%;
  padding: 1%;
  text-align: center;
  color: #e3dac9;
  
  `


function App() {
  return (
    <AppStyle>
      <header className="App-header">
        {/* <h1>Wunderlist 2.0</h1> */}
        <Navigation/>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/register'><Register/></Route>
      </header>
      <div>
        <Route path='/todo'><ToDoList/></Route>
      </div>
    </AppStyle>
  );
}

export default App;
