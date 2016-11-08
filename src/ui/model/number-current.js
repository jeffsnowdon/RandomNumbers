import Backbone from 'backbone';
import datastore from '../../datastore/data-store';

export default Backbone.Model.extend({
 defaults: {
      "curNum": ""
    },
    initialize: function () {
        this.addListeners();
    },
    addListeners: function () {
        this.listenTo(datastore, "add remove reset", function () {
            this.updateCurrentNum();
        });
    },
    updateCurrentNum: function () {
      let curNum = "";
      if (datastore.length > 0){
        let entry = datastore.at(datastore.length - 1);
        curNum = entry.get('number');
      }
      this.set('curNum', curNum);
    }
});