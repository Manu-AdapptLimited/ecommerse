import React,{Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {ProductConsumer} from "../Context";


class Product extends Component {
    render() {
        const {name,img,id,incart}=this.props.shop;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                   <div className="img-container p-5" >

                    <Link to="Productlist">

                    <img src={img} alt="shop-name" className="card-img-top"/>
                    <ProductConsumer>
                        {value=>{
                            const{addToCart }=value;
                            return (
                                <React.Fragment>
                                 <button onClick={()=>addToCart(id)} style={{textTransform:"capitalize" ,alignItems:"center"}}><FontAwesomeIcon icon={faCartPlus} style={{color:"blue"}}/>add to cart</button>
                                </React.Fragment>
                                
                            )
                        }
                        
                        }
                    </ProductConsumer>

                    

                    <p style={{textAlign:"center",textTransform:"uppercase",marginTop:"40px",backgroundColor:"green",color:"white"}}>{name}</p>
                    
                    </Link>
                   

                   </div>
               </div>
            
            </ProductWrapper>
        );
    }
}

export default Product;
const ProductWrapper = styled.div`

`;