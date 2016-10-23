import React, {Component} from 'react';

export default class ProductGrid extends Component {

  render() {
    var product = this.props.product;
    console.log('product', product);
    return (
      <div>{product.name}, {product.description}, {product.price}</div>
    )
  }
}
