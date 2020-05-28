import React, { Component } from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import './App.css';
import Shoplist from './components/Shoplist';
import Productlist from './components/Productlist';
import Cart from './components/Cart';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';

class App extends Component{
  render(){
  return(
    <BrowserRouter>
      <React.Fragment>
        <Header/>
       <Switch>
        <Route exact path="/" component={Shoplist}/>
        <Route path="/productlist" component={Productlist}/>
        <Route path="/cart" component={Cart}/>
       </Switch>
      </React.Fragment>
    </BrowserRouter>
    
    )
  }
}
export default App;  