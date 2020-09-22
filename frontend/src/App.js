import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Login } from './components/Conn/Login';
import { Register } from './components/Conn/Register';
import  Home  from './components/Home/HomePage';
import { Dashboard } from './components/Dashboard';
import Context from './components/Conn/user.context';


function App() {
  const [username, setUsername] =useState('some@gmail.com');
  const transfer =(user)=>{
    setUsername(user);
  }
  return (
      
      <Switch>
        <Context.Provider value={{user:username, cb: transfer}}>
          <Route component={Home} exact path='/'/>
          <Route component={Register} exact path='/register'/>
          <Route component={Login} exact path='/login'/>
          <Route component={Dashboard} exact path='/dashboard' />
        </Context.Provider>
      </Switch>
  );
}

export default App;
