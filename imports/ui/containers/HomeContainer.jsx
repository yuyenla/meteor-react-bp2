import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Home from '../pages/Home.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  const productSubscription = Meteor.subscribe('all_products');
  const products = Products.find().fetch();
  return {
    products: products,
    loading: !productSubscription.ready()
  };
}, Home);
