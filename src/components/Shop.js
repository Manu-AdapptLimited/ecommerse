import React,{Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
// import {ProductConsumer} from "../Context";


class Shop extends Component{
    render() {
        const {title,img}=this.props.shop;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                   <div className="img-container p-5" onClick={()=>console.log("you click the shop container")}>

                    <Link to="Productlist">

                    <img src={img} alt="shop-name" className="card-img-top"/>

                    <p style={{textAlign:"center",textTransform:"uppercase",marginTop:"40px",backgroundColor:"black",color:"white"}}>{title}</p>
                    
                    </Link>
                   

                   </div>
               </div>
            
            </ProductWrapper>
        );
    }
}

export default Shop;


const ProductWrapper = styled.div`

`;