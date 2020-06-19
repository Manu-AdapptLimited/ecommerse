import React,{Component} from 'react';
import {storeProducts,shopItem} from "./data"

const ProductConstext=React.createContext();
//provider
//consumer 
class ProductProvider extends Component {
    state={
        shop:storeProducts,
        products:[],
        cart:[],
        cartSubTotal:0,
         cartTax:0,
         cartTotal:0
    };
    componentDidMount(){
      this.setProduct();
    }
    setProduct=()=> {
        let shopItems =[];
        shopItem.forEach(item=>{
            const singleItem ={...item};
            shopItems = [...shopItems,singleItem];
        })
        this.setState(()=>{
            return {products:shopItems}
        })
        
    }
    
    getItem=(id)=>{
          const product = this.state.products .find(item=>item.id ===id);
          return product;
    }
    

    addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.incart=true;
        product.count=1;
        const price = product.price;
        product.total=price;

        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
            
        },
        ()=>{
           this.addTotal();
            
        })
    
        
    }; 

      increment=(id)=>{
         let tempCart=[...this.state.cart];
         const selectedProduct=tempCart.find(item=>item.id===id)
         const index = tempCart.indexOf(selectedProduct);
         const product =tempCart[index];
         product.count=product.count+1;
         product.total=product.count*product.price;
         this.setState(()=>{
                return {cart:[...tempCart]}
         },()=>{
             this.addTotal();
         })
      }
   
      decrement=(id)=>{
        let tempCart=[...this.state.cart];
         const selectedProduct=tempCart.find(item=>item.id===id)
         const index = tempCart.indexOf(selectedProduct);
         const product =tempCart[index];

         product.count = product.count-1;
         if(product.count===0){
             this.removeItem(id);
         }
         else{
             product.total=product.count*product.price;
             this.setState(()=>{
                return {cart:[...tempCart]}
         },()=>{
             this.addTotal();
         })
      
         }
    }

    removeItem=(id)=>{
        let tempProduct=[...this.state.products];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id!==id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProduct=tempProduct[index]
        removedProduct.incart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProduct]
            };
        },
        ()=>{
            this.addTotal();
        })
        
    }

    clearCart=()=>{ 
        this.setState(()=>{
            return {cart:[]}
        },()=>{

        })
        this.setProduct();
        this.addTotal();
    } 

    addTotal=()=>{
        let subTotal=0;
        this.state.cart.map(item=>(subTotal+=item.total));
        const tempTax=subTotal*0.1;
        const tax=parseFloat(tempTax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    render() {
        return (
           <ProductConstext.Provider value={
               {
                   ...this.state,
                   addToCart:this.addToCart,
                   increment:this.increment,
                   decrement:this.decrement,
                   removeItem:this.removeItem,
                   clearCart:this.clearCart

               }
           }>
               {this.props.children}
           </ProductConstext.Provider>
        );
    }
}

const ProductConsumer= ProductConstext.Consumer;
export {ProductProvider,ProductConsumer};