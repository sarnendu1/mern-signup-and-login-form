import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import React, { useState } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {

  const [user,setLoginUser]= useState({})

  return (
  <>
 <Router>
   <Switch>
     <Route exact path="/">
       {
         
         user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
       
       }
       </Route>
     <Route exact path="/signup"><SignUp /></Route>
     <Route exact path="/login" ><Login setLoginUser={setLoginUser}/></Route>
   </Switch>
 </Router>
  
  </>
  );
}

export default App;
