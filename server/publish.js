import { Test } from '../lib/collection';

Meteor.publish('version', function () {
  return Test.find();
});
