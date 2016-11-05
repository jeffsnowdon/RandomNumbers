import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    "curNum" : "No number yet"
  },
  generateNumber : function(){
    this.set('curNum', getRandomIntInclusive(1,100));
  }
});

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}