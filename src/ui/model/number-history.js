import Backbone from 'backbone';
import datastore from '../../datastore/data-store';
import EntryRow from '../table/entry-row';
import {formatDate} from '../table/entry-table-renderer';

export default Backbone.Collection.extend({
    model: EntryRow,
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
        let entryRows = [];
        if (datastore.length < numEntries) {
            numEntriesToGet = datastore.length;
        } 
        //get items from the end of the list
        for (let i = datastore.length; i > datastore.length - numEntriesToGet; i--) {
            let curEntry = datastore.at(i - 1);
            let formattedDate = formatDate(curEntry.get('date'));
            entryRows.push(new EntryRow({
                number: curEntry.get('number'),
                date: formattedDate
            }));
        }
        return entryRows;
    }
});
