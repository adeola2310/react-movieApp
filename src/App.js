import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./container/home/home";
import Photogrid from "./components/Photogrid/Photogrid";
import Single from "./components/Single/Single";
import NotFound from "./Error-page/Not-Found";

function App() {
  return (
   <BrowserRouter>
     <Switch>
         <Route exact path='/home'  component={Home}/>
         <Route exact path='/home' component={Photogrid}/>
         <Route exact path='/singles' component={Single}/>

         <Redirect from='/' to='/home'/>
         <Route path='*' component={NotFound}/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
