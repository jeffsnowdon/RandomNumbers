import Backbone from 'backbone';
import Entry from './entry';

let Datastore = Backbone.Model.extend({
    defaults: {
        "entries" : []
    },
    addEntry : function(number, date){
        let entries = this.get('entries');
        entries.push(new Entry(number, date));
        this.trigger('change');
    }
});

export default new Datastore();