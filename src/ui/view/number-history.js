import Backbone from 'backbone';
import _ from 'underscore';
import numberHistoryTemplate from 'template/number-history.html';

export default Backbone.View.extend({
    tagName: 'div',
    class: 'number-history',
    template: _.template(numberHistoryTemplate),
    initialize: function () {
        this.listenTo(this.model, "add remove reset", this.render);
    },
    render: function () {
        this.$el.html(this.template(this.model));
        return this;
    },
});