import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Main from '../layouts/Main.jsx';

export default createContainer(() => {
  const currentUser = Meteor.user();
  return {
    isLoggedIn: !!Meteor.userId(),
    currentUser: Meteor.user(),
  };
}, Main);
