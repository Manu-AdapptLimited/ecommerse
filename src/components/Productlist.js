// @flow strict

import React,{Component} from 'react';
import Product from "./Product" ;
import Title from "./Title";
import {ProductConsumer} from "../Context";

class Productlist extends Component {
    render() {
        return (

            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="shop" title="Item"/>
                    <div className="row">
                        <ProductConsumer>
                            {(value)=>{
                            
                            
                                
                                return value.products.map(product=>{
                                    return <Product key={product.id} shop={product} />;

                                   
                                })
                               


                            }   }
                        </ProductConsumer>

                    </div>
                </div>
            </div>
        </React.Fragment>
            

            
        );
    }
}

export default Productlist;