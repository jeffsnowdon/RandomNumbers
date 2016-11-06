import Backbone from 'backbone';
import datastore from '../../datastore/data-store';
import Entry from '../../datastore/entry';

export default Backbone.Collection.extend({
    model: Entry,
    initialize: function () {
        this.numEntries = 5;
        this.addListeners();
    },
    addListeners: function(){
         this.listenTo(datastore, "add remove reset", function () {
            this.updateEntries();
        });
    },
    setNumEntries: function (numEntries) {
        this.numEntries = numEntries;
        this.updateEntries();
    },
    updateEntries: function () {
        this.reset(this.getEntriesFromDatastore(this.numEntries));
    },
    getEntriesFromDatastore(numEntries) {
        let numEntriesToGet = numEntries;
        let entries = [];
        if (datastore.length < numEntries) {
            numEntriesToGet = datastore.length;
        } 
        //get items from the end of the list
        for (let i = datastore.length; i > datastore.length - numEntriesToGet; i--) {
            entries.push(datastore.at(i - 1));
        }
        return entries;
    }
});
