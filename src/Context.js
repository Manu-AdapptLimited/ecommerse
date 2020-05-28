import React,{Component} from 'react';
import {storeProducts} from "./data"

const ProductConstext=React.createContext();
//provider
//consumer 
class ProductProvider extends Component {
    state={
        shop:storeProducts
    };

    addToCart=()=>{
        console.log("hello from cart");
    }; 

    render() {
        return (
           <ProductConstext.Provider value={
               {
                   ...this.state,
                   addToCart:this.addToCart 

               }
           }>
               {this.props.children}
           </ProductConstext.Provider>
        );
    }
}

const ProductConsumer= ProductConstext.Consumer;
export {ProductProvider,ProductConsumer};