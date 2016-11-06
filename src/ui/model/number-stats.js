import Backbone from 'backbone';
import datastore from '../../datastore/data-store';

export default Backbone.Model.extend({
    defaults: {
        "avgNum": "No average yet."
    },
    initialize: function () {
        this.addListeners();
    },
    addListeners: function () {
        this.listenTo(datastore, "add remove", function () {
            this.updateAverage();
        });
    },
    updateAverage: function () {
        //recalculate average
        let total = 0;
        let count = 0;
        datastore.each(function(entry){
            total += entry.get('number');
            count++;
        });
        let avg = Math.round(total / count);
        this.set("avgNum", avg);
    }
});
