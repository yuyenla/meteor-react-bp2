import React, {Component} from 'react';
import ProductGrid from './ProductGrid.jsx';

export default class Products extends Component {

 displayProducts(){
 let products = this.props.products;
 //console.log('products', products);

 return(products.map(function(product, index){
     return <ProductGrid key={product._id} product={product}/>
   })
 );
 }

 render() {

   return (
     <div>{this.displayProducts()}</div>
   )
 }
}
