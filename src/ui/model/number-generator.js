import Backbone from 'backbone';
import datastore from '../../datastore/data-store';
import Entry from '../../datastore/entry';

export default Backbone.Model.extend({
  generateNumber: function () {
    var number = getRandomIntInclusive(1, 100);
    datastore.add(new Entry({
      "number": number,
      "date": new Date()
    }
    ));
  }
});

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}