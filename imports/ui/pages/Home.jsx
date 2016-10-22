import React, {PropTypes} from 'react';
import Content from '../components/Main/Content.jsx';
import Products from '../components/Home/Products.jsx';

const Home = (props) => {

console.log('products', props.products);
console.warn('loading', props.loading);
  if(props.loading){
    return(<Content isLoading />)
  }
  else{
    return (
      <Content {...props}>
        <Products products={props.products}/>
      </Content>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
