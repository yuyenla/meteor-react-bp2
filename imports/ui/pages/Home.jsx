import React, {PropTypes} from 'react';
import Content from '../components/Main/Content.jsx';
import Products from '../components/Home/Products.jsx';

const Home = (props) => {

console.log('products', props.products);

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
  loading: PropTypes.bool
};

export default Home;
