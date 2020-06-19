// @flow strict

import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../App.css";


class Header extends Component{
    render() {
        return (
            <div>
              
               <ul className="unorderlist">
                     <Link to="/" style={{textDecoration:"none" ,color:"white"}}><FontAwesomeIcon icon={faHome} />Home</Link> 

                     {/* <Link to="Productlist" style={{textDecoration:"none" ,color:"white"}}>productlist</Link> */}

                     <Link to="Cart">
                         <button style={{textTransform:"capitalize"}}><FontAwesomeIcon icon={faCartPlus} style={{color:"blue"}}/>Cart</button></Link>
               </ul>
            
            </div>
        );
    }
}

export default Header;