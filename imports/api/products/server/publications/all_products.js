import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Products } from '/imports/api/products/products.js';

Meteor.publish("all_products", function () {
   return Products.find();
});
