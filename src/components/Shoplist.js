
import React,{Component} from 'react';
import Shop from './Shop';
import Title from "./Title"
import {ProductConsumer} from "../Context";

class Shoplist extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Neighbouring" title="Shop"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    console.log(value);
                                    
                                    return value.shop.map(shops=>{
                                        return <Shop key={shops.id} shop={shops} />;
                                    })

                                }}
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Shoplist;