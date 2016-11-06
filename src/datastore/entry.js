import Backbone from 'backbone';

export default Backbone.Model.extend({
    /**
    * @param number Number associated with this entry.
    * @param date Date() of generation of this entry's number.
    */
    defaults: {
        "number": undefined,
        "date": undefined
    }
});
