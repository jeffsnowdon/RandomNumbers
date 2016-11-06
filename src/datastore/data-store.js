import Backbone from 'backbone';
import Entry from './entry';

let Datastore = Backbone.Collection.extend({
    model: Entry
});

export default new Datastore();